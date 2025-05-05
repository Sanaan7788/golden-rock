import React, { useState } from 'react';

const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const vimeoId = '1081590348';
  
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
        
        <div style={{ padding: '56.25% 0 0 0', position: 'relative', height: '100%' }}>
          <iframe 
            src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&speed=6&muted=1`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Golden Rock Video"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
};

export default VideoSection;