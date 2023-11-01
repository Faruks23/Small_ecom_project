import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const VideoEmbed = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [iframeCode, setIframeCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const generateIframeCode = () => {
    const embedCode = `<iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    setIframeCode(embedCode);
    setCopied(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Video Embed</h2>
      <input
        type="text"
        className="input mb-4"
        placeholder="Paste video URL"
        value={videoUrl}
        onChange={handleUrlChange}
      />
      <button className="btn" onClick={generateIframeCode}>
        Generate Iframe
      </button>

      <div className="mt-4">
        <div className="iframe-container">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Ftecboy45%2Fvideos%2F324257402823051%2F&show_text=false&width=560&t=0"
            width="560"
            height="314"
            style={{ Border: "none", Overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
          
        </div>
        <CopyToClipboard text={iframeCode} onCopy={() => setCopied(true)}>
          <button className="btn mt-2">
            {copied ? "Copied!" : "Copy Iframe Code"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default VideoEmbed;
