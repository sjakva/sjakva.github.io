import {
  Accordion,
  rem,
  Group,
  Text,
  Card,
  Image,
  Badge,
  Button,
} from "@mantine/core";

interface ContainerProps {
  // name: string;
}

const ExperienceCard: React.FC<ContainerProps> = ({}) => {
  const jobs = [
    {
      name: "John Deere Supply Chain",
      position: "Software Engineer",
      website: "https://www.deere.com/en/index.html",
      image: {
        'url': "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/John_Deere_logo.svg/1200px-John_Deere_logo.svg.png",
        'height': 200,
        'width': 300
      },
        bulletPoints: ["jd bp 1", "jd bp 2", "jd bp 3"],
      techStack: [
        ["Java", "pink"],
        ["React", "blue"],
        ["SQL", "green"],
        ["AWS", "orange"],
      ],
      val: 'jd'
    },
    {
      name: "Sav.com",
      position: "Web Developer",
      website: "https://www.sav.com/",
      image: {
        'url': "https://theme.zdassets.com/theme_assets/15834211/c8dfaeb709d47552ba41c8f2f976fdc172805461.png",
        'height': 100,
        'width': 300
      },
      val: 'sav'
    },
  ];

  return (
    <Accordion transitionDuration={1000}>
      {/* ... Accordion items */}
      {jobs.map((job) => {
        return (
          <Accordion.Item value={job.val}>
            <Accordion.Control
              style={{
                backgroundColor: "#7a5d85",
              }}
            >
              <Text component="span" inherit color="#ffff">
                {" "}
                {job.name}{" "}
              </Text>
              <Text weight={500}> {job.position} </Text>
            </Accordion.Control>
            <Accordion.Panel
              style={{
                backgroundColor: "#7a5d85",
              }}
            >
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{
                  backgroundColor: "#34273b",
                }}
              >
                {job.image? 
                  <Card.Section component="a" href="localhost:8100/">
                    <Image src={job.image.url} height={job.image.height} width={job.image.width} alt={job.val} ml={'30%'} />
                  </Card.Section>
                : <></>}

                {job.techStack?
                  <Group position="left" mt="md" mb="xs">
                    {job.techStack.map((skill) => {
                      return (
                        <Badge color={skill[1]} variant="light">
                          {skill[0]}
                        </Badge>
                      )
                    })}
                  </Group>
                  : <></>}

                <Text size="sm" color="white">
                  Company/Position Description
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Company Website
                </Button>
              </Card>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default ExperienceCard;
