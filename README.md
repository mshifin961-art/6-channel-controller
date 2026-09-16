# ControlHub — 6 Channel Controller

A lightweight, mobile-first web dashboard for controlling six IoT output channels.

## Current phase

This first version is a **virtual controller**. The six controls work in the browser and keep their ON/OFF state in the page. No ESP32 hardware is required yet.

## Planned architecture

`Phone / Chrome → Web Dashboard → Cloud Transport → XIAO ESP32-C3 → 6-channel relay`

The GitHub Pages site is only the user interface. A cloud service will be added separately for real remote commands and device state synchronization.

## Planned phases

1. Dashboard UI — complete
2. Cloud command/state layer
3. XIAO ESP32-C3 firmware
4. Six-channel relay integration
5. Authentication and device security
6. Live device status, reconnect handling and OTA updates

## Safety

The web dashboard must never be treated as a replacement for electrical isolation or proper relay wiring. Mains-voltage loads require suitable rated hardware and safe installation.
