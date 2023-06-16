import { useEffect, useState } from 'react';
import { HeroInformation } from './HeroInformation';
import withLoading from './withLoading';
import { fetchHero, HeroType } from './heroes';

const HeroInformationWithLoading = withLoading(HeroInformation);
const Application = () => {
  const [hero, setHero] = useState<HeroType>(null);
  useEffect(() => {
    fetchHero().then((hero: HeroType) => {
      setHero(hero);
    })
  }, []);
  return (
    hero && <HeroInformationWithLoading hero={hero}/>
  )
};

export default Application;