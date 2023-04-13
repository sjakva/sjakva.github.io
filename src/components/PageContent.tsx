interface ContainerProps {
  name: string;
}

const PageContent: React.FC<ContainerProps> = ({ name }) => {
  // if name = page, return that page component
  if (name == "about") {
    return <>about page</>;
  } else if (name == "education") {
    return <>education page</>;
  } else if (name == "experience") {
    return <>experience page</>;
  } else if (name == "projects") {
    return <>projects page</>;
  } else if (name == "links") {
    return <>links page</>;
  } else {
    return <>huh???</>;
  }
};

export default PageContent;
