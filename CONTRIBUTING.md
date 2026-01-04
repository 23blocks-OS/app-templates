# Contributing to 23blocks App Templates

Thank you for your interest in contributing! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

- Check existing issues before creating a new one
- Use the issue templates provided
- Include clear reproduction steps for bugs
- Specify which template(s) are affected

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Ensure all templates still build successfully:
   ```bash
   # Next.js
   cd nextjs && npm install && npm run build

   # Angular
   cd angular && npm install && npm run build

   # Mobile
   cd mobile && npm install && npm run typescript
   ```
5. Commit with a clear message following [Conventional Commits](https://www.conventionalcommits.org/)
6. Push and open a Pull Request

### Commit Message Format

```
type(scope): description

Examples:
feat(nextjs): add dark mode toggle component
fix(angular): resolve authentication redirect issue
docs: update README with new configuration options
chore: update SDK to latest version
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `style`

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing patterns in each template
- Keep dependencies minimal
- Ensure dark mode support for UI components

### Template Structure

Each template should include:
- Clear README with setup instructions
- Environment configuration examples
- Working authentication flow
- Consistent SDK integration patterns

## Questions?

Open a discussion or reach out at [23blocks.com](https://23blocks.com).
