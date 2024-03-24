import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Designed for you"
    description="In every session we hear about each other’s experience of hope and strength in dealing with our personal Neurodiversity/ADHD journey.

    Then we hear from a subject matter expert who helps us each create a personalised practical action plan"
  >
    <VerticalFeatureRow
      title="Session 1: Program overview"
      description="How we share (what we want to achieve – a long-term peer supported and lead group).  

      How we plan to build a dynamic in-person community that meets regularly? 
      
      Subject matter expert:  The power of meditation and its potential value in dealing with ADHD through an active demonstration.  Chance for you to try it for yourself!"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Session 2: Movement/Exercise and diet for our neurodiverse community personal share -"
      description="How exercise helped me survive ADHD
      
      ·      Subject matter experts: Sammy, professional footballer and now an experienced fitness coach with years of dealing with ADHD professional athletes 
      
      ·     Subject matter expert:  Christine Rahman, manager of Tottenham Talking  with experience in mental health. She’s up to date with all the latest research on the best diets and foods and what to avoid for those with ADHD.  "
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Session 3: Organizational Skills – Getting Things Done."
      description="Simple organizational systems that can be applied to help organize life more effectively  

      ·    Group share  showcase your personal story if you want to dynamic showcase of how a proven organizational system works, tips and tricks for you to get started on a more productive journey.  Start your planning during the session with the moderator·      
      
      ·    Get to know your support buddy better
      
      Expert matter speaker;  Organizational expert"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Session 4: Jobs/Work and Vocation –"
      description="What color is your parachute? Using this world-wide best seller which is a practical  guide to a lifetime of meaningful work and career success we discuss the challenges of finding the right job for our community members?

      ·      Tell us about your own job experiences and let us know if you have succeeded in finding the dream job that matches yourr needs. TIps on dealing with bosses and office politics
      
      ·      Group share personal story of working with ADHD"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
