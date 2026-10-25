# Video screenshot verification checklist

## Record before capture

- [ ] Device/model, operating system, browser and full version.
- [ ] Capture date and source provenance/permission.
- [ ] Source SHA256, dimensions, orientation, codec and SDR/HDR status if known.
- [ ] Requested timestamp and actual source timestamp; retain both when they differ.

## Verify the saved file

- [ ] Use the actual download, not a thumbnail or a screenshot of the player.
- [ ] Record output format, exact bytes, dimensions and SHA256.
- [ ] Confirm the intended source picture, especially near a frame boundary.
- [ ] Check whether dimensions are native, resized or rotated.
- [ ] Test PNG and JPG separately, preserving JPG quality settings.

## Compare responsibly

- [ ] Hold the source, moment, decoder and output size constant.
- [ ] Declare the relative reference and formula for every pixel metric.
- [ ] Separate unequal sample values from an absolute color-accuracy claim.
- [ ] Mark HDR, physical-phone behavior or calibrated-display checks not tested when absent.
- [ ] Keep partial downloads and failed runs labeled partial/failed.

A millisecond readout does not create additional source pictures. A lossless PNG preserves the pixels supplied to its encoder, not necessarily original high-bit-depth or HDR metadata.
