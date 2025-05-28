import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';

import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="Here’s a curated lineup of the tools, apps, and hardware that fuel my coding hustle every day."
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    My weapon of choice for coding is{' '}
                    <Link href="https://code.visualstudio.com/">VSCode</Link>, rocking the{' '}
                    <strong>Gruvbox</strong> theme and Operator Mono font to keep things
                    stylish.
                  </ListItem>
                  <ListItem>
                    Chrome is my go-to browser for everything—dev work, browsing, you name
                    it.
                  </ListItem>
                  <ListItem>
                    For front-end magic, <Link href="https://reactjs.org/">React</Link> is
                    my jam, and I dive into{' '}
                    <Link href="https://reactnative.dev/">React Native</Link> for building
                    apps that run on everything.
                  </ListItem>
                  <ListItem>
                    I keep things clean with CSS—no crazy 3D effects for me—but I’m all in
                    on <Link href="https://tailwindcss.com/">TailwindCSS</Link>,
                    <Link href="https://getbootstrap.com/">Bootstrap</Link>, and{' '}
                    <Link href="https://mui.com/">Material UI</Link> for quick, responsive
                    designs.
                  </ListItem>
                  <ListItem>
                    When it comes to animations,{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link> helps
                    me bring the UI to life with smooth spring animations.
                  </ListItem>
                  <ListItem>
                    On the backend, I'm all about <strong>Node.js</strong> with the{' '}
                    <strong>Express</strong> framework for building efficient and scalable
                    server-side apps.
                  </ListItem>
                  <ListItem>
                    For version control, I rely on{' '}
                    <Link href="https://git-scm.com/">Git</Link> and{' '}
                    <Link href="https://github.com/">GitHub</Link> to keep things
                    organized and collaborative.
                  </ListItem>
                  <ListItem>
                    When it comes to databases,{' '}
                    <Link href="https://www.mongodb.com/">MongoDB</Link> is my go-to NoSQL
                    solution for handling data with flexibility.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Operating System</TableHeadCell>
                    <TableCell>(Windows/Ubuntu)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome/Brave</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>RAM</TableHeadCell>
                    <TableCell>24GB</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Laptop </TableHeadCell>
                    <TableCell>Asus ROG</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </>
  );
};
