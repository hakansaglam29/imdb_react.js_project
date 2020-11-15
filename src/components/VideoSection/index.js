import { VideoDiv, StyledIframe } from "./VideoSection.style"

export const VideoSection = (props) => {
    return (
        <VideoDiv>
            <StyledIframe width="620" height="345"
                src="https://www.youtube.com/embed/43OVm86-4rU?autoplay=1&mute=1">
            </StyledIframe>
        </VideoDiv>
    )
}