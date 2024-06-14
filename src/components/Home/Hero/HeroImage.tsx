import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <img
        src="https://s3-alpha-sig.figma.com/img/50a8/937d/e9edcd8cd4032215f2ba884456f4af25?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hNlo7Yg-mdoOzMnH~O50k0opRLBuaRD-8OHMj6NYZyzuKpzxr6MHk5-k9UyXG5hvqDgvsvLwjkl7XiyEGK5W5nie6Pm7IqsuE-fs~1iBQbFhVyfgYQZYd6pJcEMFL3HxoaM3B8SE1n4DLXEkqFHLtFqRfDoYy-0AE5PZ8Yt3xmjmXvA9g1iRq6gQM5TGTTKC1L2XgCqemwFwyuEjaCJbhkSIFAE0Cd1qDYaZzK5l76Z8wz31dcziMiJsBofwY9sBx10zMcPeXabN8r~weInc1tkTeWZFLexEVae2rErfBExGInVlCiPhGhTlgok6~6l~qZNZcf2eaEWZricmpIj0Xg__"
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
