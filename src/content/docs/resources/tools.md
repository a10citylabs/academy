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
| **A10city Verify** | A10city's verification tool | [a10city.com/verify](https://a10city.com/verify) |

### Developer Tools

For integrating content credential verification into your applications:

- **c2pa-js** — JavaScript library for reading C2PA manifests
- **c2pa-rs** — Rust implementation of C2PA
- **c2pa-python** — Python bindings for C2PA

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

- [Content Authenticity Blog](https://contentauthenticity.org/blog)
- [Content Authenticity Initiative](https://contentauthenticity.org)
