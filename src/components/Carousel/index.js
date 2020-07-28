import React from "react";
import {
  VideoCardGroupContainer,
  VideoCardList,
  ButtonScrollToLeft,
  ButtonScrollToRight,
  Title,
  ExtraLink,
} from "./styles";
import VideoCard from "./components/VideoCard";

function VideoCardGroup({ ignoreFirstVideo, category }) {
  const list = React.useRef();
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  const handleClickScrollToRight = () => {
    list.current.scrollLeft += 300;
  };

  const handleClickScrollToLeft = () => {
    list.current.scrollLeft -= 300;
  };

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <VideoCardList ref={list}>
        <ButtonScrollToLeft onClick={handleClickScrollToLeft}/>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
        <ButtonScrollToRight onClick={handleClickScrollToRight} />
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
