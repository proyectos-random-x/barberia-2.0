import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import SectionTitle from '$/SectionTitle'

export default function Video() {
	return (
		<section className="py-12" aria-labelledby="video-presentacion">
    		<SectionTitle texto="Presentación en video" />
    		<div className="rounded shadow w-8/12 overflow-hidden mx-auto">
		   	<LiteYouTubeEmbed id="wcVVXUV0YUY" cookie={false} title="Reproducir video de presentación de la barbería" poster="maxresdefault" />
		   </div>
		</section>
	)
}