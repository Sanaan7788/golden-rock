
import React, { useState, useEffect, useRef } from 'react';

const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);
  
  // Replace this with your actual Vimeo video ID
  const vimeoId = '1081886679';
  
  useEffect(() => {
    const handleIframeLoad = () => {
      setIsLoading(false);
      
      if (!window.Vimeo) {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.async = true;
        script.onload = initializePlayer;
        document.body.appendChild(script);
      } else {
        initializePlayer();
      }
    };
    
    const initializePlayer = () => {
      if (iframeRef.current && window.Vimeo) {
        const player = new window.Vimeo.Player(iframeRef.current);
        
        player.setPlaybackRate(4.0).catch(error => {
          console.warn('Unable to set 4x speed, trying 2x instead:', error);
          player.setPlaybackRate(2.0);
        });
      }
    };
    
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }
    
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <div id="home" className="relative w-full">
      <div className="w-full h-screen overflow-hidden bg-gray-900">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-golden mb-4"></div>
              <p className="text-cream text-lg">Loading video...</p>
            </div>
          </div>
        )}
        
        <div className="h-full w-full relative">
          <iframe 
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
            className="absolute top-0 left-0 w-full h-full md:object-cover md:w-full md:h-full portrait:object-contain"
            style={{
              objectFit: 'cover',
              /* On mobile, change how the video is framed */
              '@media (max-width: 768px)': {
                objectFit: 'contain',
                width: '100%',
                height: '100%',
                /* Center the video */
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }
            }}
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Golden Rock Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

// import React, { useState, useEffect } from 'react';

// const VideoSection = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Your current Vimeo ID
//   const vimeoId = '1081886679';
  
//   // Check if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Initial check
//     checkMobile();
    
//     // Add event listener for window resize
//     window.addEventListener('resize', checkMobile);
    
//     // Cleanup
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return (
//     <div id="home" className="relative w-full h-screen">
//       <div className="w-full h-full overflow-hidden bg-gray-900">
//         {isLoading && (
//           <div className="absolute inset-0 flex items-center justify-center z-10">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-golden mb-4"></div>
//               <p className="text-cream text-lg">Loading video...</p>
//             </div>
//           </div>
//         )}
        
//         <div className="w-full h-full relative m-0 p-0">
//           <iframe 
//             src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&speed=6&muted=1`}
//             style={{ 
//               position: 'absolute', 
//               top: 0, 
//               left: 0, 
//               bottom:0,
//               right:0,
//               height: '100%', 
//               objectFit: isMobile ? 'contain' : 'cover',
//               transform: isMobile ? 'scale(3.7)' : 'none'
//             }}
//             frameBorder="0" 
//             allow="autoplay; fullscreen; picture-in-picture" 
//             allowFullScreen
//             title="Golden Rock Video"
//             onLoad={() => setIsLoading(false)}
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;