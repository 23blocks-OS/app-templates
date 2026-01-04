# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in these templates, please report it responsibly.

**Do not open a public issue for security vulnerabilities.**

Instead, please email security concerns to the 23blocks team or use GitHub's private vulnerability reporting feature.

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Affected template(s) and version(s)
- Potential impact
- Any suggested fixes (optional)

## Security Best Practices

When using these templates:

1. **Never commit secrets** - Use environment variables for API keys and tokens
2. **Use cookie mode in production** - For web apps, `authMode: 'cookie'` is more secure than token mode
3. **Keep dependencies updated** - Regularly run `npm audit` and update packages
4. **Review environment files** - Ensure `.env` files are in `.gitignore`

## Supported Versions

We provide security updates for the latest version of each template.

| Template | Supported |
|----------|-----------|
| nextjs   | Latest    |
| angular  | Latest    |
| mobile   | Latest    |
