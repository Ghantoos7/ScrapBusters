import React from 'react';
import './Projectcard.css'; 

import AWSLogo from '../../assets/logos/AWS.svg';
import PythonLogo from '../../assets/logos/Python.svg';
import PalantirFoundryLogo from '../../assets/logos/Palantir_Foundry.svg';
import TensorFlowLogo from '../../assets/logos/tensorflow.svg';
import KubernetesLogo from '../../assets/logos/kubernets.svg';
import DockerLogo from '../../assets/logos/docker.svg';
import SparkLogo from '../../assets/logos/apache-spark.svg';
import HadoopLogo from '../../assets/logos/hadoop.svg';
import PostgreSQLLogo from '../../assets/logos/postgresql.svg';
import ReactLogo from '../../assets/logos/react.svg';
import ReduxLogo from '../../assets/logos/redux.svg';
import CSSLogo from '../../assets/logos/css.svg';
import TerraformLogo from '../../assets/logos/terraform-enterprise.svg';

const techLogos = {
  'AWS': AWSLogo,
  'Python': PythonLogo,
  'Palantir Foundry': PalantirFoundryLogo,
  'TensorFlow': TensorFlowLogo,
  'Kubernetes': KubernetesLogo,
  'Docker': DockerLogo,
  'Spark': SparkLogo,
  'Hadoop': HadoopLogo,
  'PostgreSQL': PostgreSQLLogo,
  'React': ReactLogo,
  'Redux': ReduxLogo,
  'CSS': CSSLogo,
  'Terraform': TerraformLogo,
};

function Projectcard({ title, description, technologies, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} project`} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="technology-logos">
        {technologies.map((tech, index) => (
          <img key={index} src={techLogos[tech]} alt={tech} className="technology-logo" />
        ))}
      </div>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a> 
    </div>
  );
}

export default Projectcard;