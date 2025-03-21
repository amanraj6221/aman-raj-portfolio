import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Section = styled.section`
  padding: 60px 20px;
  background: ${({ theme }) => theme.background};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
`;

const SkillTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const SkillLogo = styled.img`
  width: 32px;
  height: 32px;
`;

const SkillTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.card_light};
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  gap: 8px;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Section id="skills">
      <Header>
        <Title>Skills</Title>
        <Desc>Here are some of my skills I have been developing over the past 2 years.</Desc>
      </Header>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillTitleContainer>
              <SkillLogo src={skill.logo} alt={skill.title} />
              <SkillTitle>{skill.title}</SkillTitle>
            </SkillTitleContainer>
            <SkillList>
              {skill.skills.map((item, idx) => (
                <SkillItem key={idx}>
                  <SkillImage src={item.image} alt={item.name} />
                  {item.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills;
