# README

Stuff to come here. 

## Generate mobile friendly video iterations for the background video. 


## Generate iOS friendly video 

`ffmpeg -i src/assets/wbsite_sizzle_v3.webm -c:v libx264 -profile:v main -pix_fmt yuv420p -movflags +faststart -an src/assets/wbsite_sizzle_v3.mp4`

### Mobile MP4 (H.264, ~720p wide, Safari/iOS friendly)

```bash
ffmpeg -i src/assets/wbsite_sizzle_v3.webm \
  -vf "scale=720:-2" \
  -c:v libx264 -profile:v main -pix_fmt yuv420p \
  -crf 30 -preset slow -movflags +faststart -an \
  src/assets/wbsite_sizzle_v3-mobile.mp4
```

### Mobile WebM (VP9)

```bash
ffmpeg -i src/assets/wbsite_sizzle_v3.webm \
  -vf "scale=720:-2" \
  -c:v libvpx-vp9 -crf 36 -b:v 0 -an \
  src/assets/wbsite_sizzle_v3-mobile.webm
```

Note -an removes audio. 

### Create a poster image with 

```
ffmpeg -i src/assets/Rev-Yearwood-5-26-26-small.webm -frames:v 1 -vf "scale='iw*sar':ih,setsar=1" -q:v 2 src/assets/imgs/rev-poster.jpg
``

## Example source block

<div class="index-video-bg" aria-hidden="true">
		<video class="index-video-bg__media" muted loop autoplay="autoplay" preload="auto" aria-hidden="true" crossorigin="anonymous" controlslist="nodownload" playsinline="" poster="/assets/imgs/split-img.jpg">
			<source src="/assets/wbsite_sizzle_v3-mobile.mp4"  type="video/mp4"  media="(max-width: 768px)">
			<source src="/assets/wbsite_sizzle_v3-mobile.webm" type="video/webm" media="(max-width: 768px)">
			<source src="/assets/wbsite_sizzle_v3.mp4"  type="video/mp4">
			<source src="/assets/wbsite_sizzle_v3.webm" type="video/webm">
		</video>
</div>
