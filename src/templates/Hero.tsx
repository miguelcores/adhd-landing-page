import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'FIND YOUR ADHD SUPERPOWERS!\n'}
            <span className="text-primary-500">Our program</span>
          </>
        }
        description="We foster connection and develop a community with a focus on ADHD/neurodiversity to support your mental wellbeing"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Book now link</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
