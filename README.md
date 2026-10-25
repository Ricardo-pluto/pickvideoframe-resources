# Video Frame Extraction Resources

Reusable measurements, a screenshot verification checklist, a timestamp planner, and a PNG pixel comparator for video-to-image workflows.

The companion browser tools and test write-up are at [PickVideoFrame](https://pickvideoframe.com/video-screenshot/).

## Included resources

- [CSV measurements](data/video-screenshot-measurements.csv) and [JSON record](data/video-screenshot-measurements.json): twelve actual saved-image measurements from three tools at three moments, including both PNG and JPG for the companion tool.
- [Synthetic source clip](data/synthetic-test.mp4) and saved images under data/images/: a reproducible three-second SDR H.264 clip, 640 × 360, two source frames per second.
- [Screenshot verification checklist](checklists/video-screenshot.md): source timestamps, dimensions, downloaded files and color-scope checks.
- [Timestamp planner](tools/timestamps.mjs): generate a start-inclusive, end-exclusive CSV request schedule without decoding a video.
- [PNG pixel comparator](tools/compare-png.mjs): compare two actual PNGs with the same FFmpeg RGB24 decoder.

## Run the tools

Requires Node.js 20 or newer. The PNG comparator also requires your own FFmpeg executable. There are no npm dependencies.

```sh
node tools/timestamps.mjs 0 3 1
node tools/compare-png.mjs data/images/pickvideoframe-0.png data/images/vidshift-0.png /path/to/ffmpeg
node --test tests/*.test.mjs
```

The planner outputs time requests, not guaranteed distinct source frames or completed image counts. It does not predict file size, speed or memory. The comparison tool checks RGB sample differences; it does not test HDR, a display or absolute color accuracy.

## Measurement provenance and limitations

Captured on 25 October 2026 using Google Chrome 155.0.8059.40 on a Tencent Cloud CVM running Windows 11 Pro 10.0.26300. All images were saved through the tools' browser download controls. Source video was generated locally with FFmpeg 6.1.1:

```sh
ffmpeg -n -f lavfi -i "testsrc2=size=640x360:rate=2:duration=3" -c:v libx264 -pix_fmt yuv420p synthetic-test.mp4
```

Frame Extractor displayed 0.052, 1.072 and 2.061 seconds; VidShift displayed 0, 1 and 2; PickVideoFrame displayed source times 0, 1 and 2. The clip holds each source picture for half a second. Do not reinterpret these displayed labels as identical timestamp precision.

Our PNG at each corresponding moment is the relative reference. Its zero difference is true by definition, not evidence of superior color accuracy. MAE = sum of absolute RGB channel differences / (width × height × 3). Mean channel delta = sum(candidate channel − reference channel) / (width × height). Different pixels have at least one unequal RGB channel. File size is the saved file length. Values in the JSON and CSV are unrounded calculations, not estimates.

The two competitors' corresponding PNG file hashes matched each other in this run. The files differ from the reference rendering. This is one synthetic SDR clip on one setup, not a representative performance benchmark or a color accuracy ranking. Competitor JPG, physical phones, HDR fidelity and calibrated-display behavior were not tested.

## Contributions

Report a reproducible issue or propose an additional test with source ownership, file hash, device, OS, browser version, source timestamps, export format and saved output. Keep unmeasured cells marked not tested. Do not upload private footage.

## License

Code and the original checklist use the [MIT license](LICENSE). Original generated test files and measurements use [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Third-party tool names identify the measured software and do not imply endorsement.
