---
title: C2PA Standards
description: Learn about the Coalition for Content Provenance and Authenticity (C2PA) and its technical standards.
---

## What is C2PA?

The **Coalition for Content Provenance and Authenticity (C2PA)** is a Joint Development Foundation project that addresses the prevalence of misleading information online through the development of technical standards for certifying the source and history of media content.

## Founding Members

C2PA was founded by leading technology companies and media organizations:

- **Adobe** — Creative software leader
- **Arm** — Semiconductor and software design company
- **BBC** — British Broadcasting Corporation
- **Intel** — Technology giant
- **Microsoft** — Technology company
- **Truepic** — Photo and video verification platform

## Key Concepts

### Content Credentials

Content Credentials are the user-facing term for C2PA manifests — the metadata that records who created content, how it was created, and what changes have been made.

### Manifests

A C2PA manifest is a data structure that contains:

- **Claims** — Statements about the content (creator, creation date, etc.)
- **Assertions** — Specific pieces of information or actions
- **Signature** — Cryptographic proof that the manifest hasn't been tampered with
- **Ingredients** — References to any source materials used

### Trust Model

C2PA uses X.509 certificates for signing, similar to HTTPS. This means:

- Credentials are cryptographically signed
- Signatures can be verified by anyone
- Trust is established through certificate authorities

## Technical Specifications

The C2PA specification defines:

1. **How to embed credentials** in various file formats (JPEG, PNG, PDF, etc.)
2. **What information to record** about content creation and modification
3. **How to sign and verify** credentials cryptographically
4. **How to display** credential information to users

## Learn More

- [Official C2PA Website](https://c2pa.org)
- [C2PA Specification](https://c2pa.org/specifications/specifications/2.0/specs/C2PA_Specification.html)
- [Content Authenticity Initiative](https://contentauthenticity.org)
- [C2PA GitHub Repository](https://github.com/c2pa-org)
