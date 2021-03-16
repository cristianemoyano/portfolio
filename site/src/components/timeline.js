import React from "react"

import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';

const customTheme = {
    yearColor: '#fff',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#fff',
    subtitleColor: '#fff',
    textColor: '#fff',
};




const ProjectTimeline = ({ projects }) => {
    return (
        <Timeline theme={customTheme} dateFormat='ll'>
            {projects.map(({ node: project }) => (
                <Container>
                    <YearContent
                        startDate={project.startDate}
                        endDate={project.endDate}
                        currentYear={project.currentYear}
                    />
                    <BodyContent>
                        <Section title={project.title}>
                            <Description variant='subtitle' text={project.company} />
                            <Description text={project.location} />
                            <Description text={project.type} />
                            <Description text={project.description} />
                        </Section>
                    </BodyContent>
                </Container>
            ))}
        </Timeline>
    )
}

export default ProjectTimeline;