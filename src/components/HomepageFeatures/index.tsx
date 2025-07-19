import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Master Linux Basics',
    Svg: require('@site/static/img/undraw_remote-worker.svg').default,
    description: (
      <>
        Learn the fundamental Linux commands and get comfortable with different distributions.
        This guide will help you navigate your way through the open-source ecosystem with ease.
      </>
    ),
  },
  {
    title: 'Efficient Version Control',
    Svg: require('@site/static/img/undraw_version-control.svg').default,
    description: (
      <>
        Understand the power of Git for version control. Whether you are managing your own 
        projects or collaborating with others, this guide provides the tools you need to succeed.
      </>
    ),
  },
  {
    title: 'Seamless Environment Setup',
    Svg: require('@site/static/img/undraw_dev-environment.svg').default,
    description: (
      <>
        Get your development environment up and running quickly with our comprehensive 
        setup instructions for Linux and Git. Start coding and managing your projects efficiently.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}