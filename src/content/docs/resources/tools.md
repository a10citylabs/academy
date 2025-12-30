---
title: Tools & Verification
description: Discover tools for verifying content authenticity and exploring content credentials.
---

## Verification Tools

### Web-Based Verifiers

These tools let you verify content credentials directly in your browser:

| Tool | Description | Link |
|------|-------------|------|
| **CAI Verify** | Official Content Authenticity Initiative verifier | [verify.contentauthenticity.org](https://verify.contentauthenticity.org) |
| **A10city Verify** | A10city's verification tool | Coming Soon |

### Browser Extensions

Check content credentials as you browse:

- **Content Credentials Browser Extension** — Check images on any website

### Developer Tools

For integrating content credential verification into your applications:

- **c2pa-js** — JavaScript library for reading C2PA manifests
- **c2pa-rs** — Rust implementation of C2PA
- **c2pa-python** — Python bindings for C2PA

## Creation Tools

### Software with C2PA Support

These applications can create content with embedded credentials:

- **Adobe Photoshop** (2023 and later)
- **Adobe Lightroom** (2023 and later)
- **Microsoft Designer**
- **Truepic Lens** (mobile app)

### Hardware Support

Some camera manufacturers are beginning to support C2PA:

- **Leica** — M11-P with Content Credentials
- **Sony** — Select professional cameras
- **Nikon** — Coming soon

## Best Practices

### For Content Creators

1. **Enable credentials** in your creation tools
2. **Review before publishing** — Check what information is included
3. **Maintain the chain** — Use credential-aware tools throughout your workflow
4. **Educate your audience** — Help viewers understand how to verify

### For Consumers

1. **Look for the CR pin** — Many platforms display a Content Credentials indicator
2. **Verify important content** — Use verification tools for content that matters
3. **Consider context** — Credentials verify origin, not truth
4. **Report issues** — Help improve the ecosystem by reporting problems

## API Access

Developers can access verification APIs for integration:

```javascript
// Example using c2pa-js
import { createC2pa } from 'c2pa';

const c2pa = await createC2pa();
const result = await c2pa.read(imageBuffer);

if (result.manifestStore) {
  console.log('Content has credentials!');
  console.log('Active manifest:', result.manifestStore.activeManifest);
}
```

## Stay Updated

The content authenticity ecosystem is evolving rapidly. Follow these resources:

- [C2PA Blog](https://c2pa.org/blog)
- [Content Authenticity Initiative](https://contentauthenticity.org)
- [A10city Updates](https://a10city.com/blog)
