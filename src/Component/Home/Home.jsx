import React from 'react';
import ChatBot from '../ChatBot/ChatBot';
import Challenge from '../Challenge/Challenge';
import UserInput from '../UserInput/UserInput';
import SpeechRecognition from '../SpechRecognetion/Specreconation';
import Word from '../Word/Word';
import SentenceUnscramble from '../Wordmaker/Wordmaker';
import VideoEmbed from '../Video/Video';

const Home = () => {
  const array ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempore fuga cupiditate amet at pariatur ipsum unde rerum neque nesciunt. Nostrum porro eum asperiores suscipit exercitationem est ut saepe tenetur nihil. Quisquam temporibus commodi expedita quas harum at excepturi alias a provident eius optio rem maxime veritatis nostrum, aliquam natus maiores dolorum repudiandae magni doloremque voluptas voluptatibus magnam ducimus officiis! Repudiandae autem sequi quia facere, placeat magnam aliquam, error vitae voluptatum eveniet facilis quod voluptatem qui hic ducimus earum sint nihil! Aut maiores explicabo facere dolores voluptatum cupiditate, aliquid, laboriosam deserunt culpa debitis, quae nisi sed? Ut sunt aspernatur voluptate?"
 
 console.log(array.length);
  return (
    <div className='grid grid-cols-3'>
      {
        array.split("").slice(0,100).map(item => {
          return (
            <>
              <VideoEmbed></VideoEmbed>
            </>
          );
        })
     }
    
      <ChatBot />
      <Challenge/>
      <UserInput />
      
      <SpeechRecognition></SpeechRecognition>
      <Word></Word>
      <SentenceUnscramble sentence={"Hello world i love the bangladesh"}></SentenceUnscramble>
    </div>
  );
};

export default Home;