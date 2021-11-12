import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "What is this?",
    description: (
      <>
        <p>
          //TODO
        </p>
      </>
    ),
  },
  {
    title: "What do I do?",
    description: (
      <>
        <p>I work for a Singapore Internet company, doing server-side development, 
          Also I am interested in front-end.
        </p>
        {/* <ul>
          <li>
            <a href="https://github.com/DefinitelyTyped">Definitely Typed</a>
          </li>
          <li>
            <a href="https://github.com/TypeStrong/ts-loader">ts-loader</a>
          </li>
          <li>
            <a href="https://github.com/TypeStrong/fork-ts-checker-webpack-plugin">
              fork-ts-checker-webpack-plugin
            </a>
          </li>
        </ul> */}
      </>
    ),
  },
  {
    title: "Who am I?",
    description: (
      <>
        <p>
          I am Syuan, A Developer started programming 2 years ago. born and raised in Baoji, Shannxi. 
          Studied in Wuhan, Chengdu, worked in Shenzhen for half a year, now working in Singapore. 
          Outside of work, I enjoy guitar, cooking and photography.
        </p>

        {/* <p>
          I write the occasional <a href="https://reillysontour.johnnyreilly.com/">
            travel blog(ish)
          </a> as well.
        </p> */}

        <p>
          You can <a href="mailto:syuan.cheng@qq.com">email me</a>.
        </p>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function About() {
  const imgUrl = useBaseUrl("img/profile.jpg");
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`About ${siteConfig.title}`}
      description={`What is ${siteConfig.title}`}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div className="text--center">
            <img
              src={imgUrl}
              className={styles.profileImage}
              alt="johnnyreilly profile picture"
            />
          </div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default About;