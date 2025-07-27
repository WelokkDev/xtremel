import { TypeAnimation } from 'react-type-animation';

export default function Heading() {
  return (
    <h1 className="text-center z-100">Affordable Web Hosting,<br></br>Made{' '}
        <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'Easy.',
            1200, // wait 1s before replacing "Mice" with "Hamsters"
            'Fast.',
            1200,
            'Safe.',
            1200,
        ]}
        wrapper="span"
        speed={25}
        style={{ fontSize: '72px', display: 'inline-block'}}
        repeat={Infinity}
        />
    </h1>
  );
};

