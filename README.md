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
<div class="index-video-bg" aria-hidden="true">
    <video class="index-video-bg__media" muted loop autoplay playsinline
        preload="auto" aria-hidden="true" crossorigin="anonymous"
        controlslist="nodownload" poster="/assets/imgs/split-img.jpg"
        data-src-desktop-webm="/assets/wbsite_sizzle_v3.webm"
        data-src-desktop-mp4="/assets/wbsite_sizzle_v3.mp4"
        data-src-mobile-webm="/assets/wbsite_sizzle_v3-mobile.webm"
        data-src-mobile-mp4="/assets/wbsite_sizzle_v3-mobile.mp4">
    </video>
</div>
