<!--
SPDX-FileCopyrightText: 2024 Ali Sajid Imami

SPDX-License-Identifier: MIT
-->

# PageSpeed Insights GitHub Action

![GitHub](https://img.shields.io/github/license/yourusername/pagespeed-insights-action)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![REUSE status](https://api.reuse.software/badge/github.com/yourusername/pagespeed-insights-action)](https://api.reuse.software/info/github.com/yourusername/pagespeed-insights-action)

A GitHub Action that analyzes web performance using Google PageSpeed Insights, stores the results, and generates dynamic performance badges. Perfect for monitoring website performance metrics and displaying them directly in your repository.

## Features

- 🚀 Automated PageSpeed Insights analysis
- 📊 Performance trend tracking
- 🏷️ Dynamic badge generation for shields.io
- 💾 Efficient data caching via GitHub Gists
- 📈 Historical performance data tracking
- 🎯 Customizable performance thresholds
- 📝 Comprehensive performance reports

## Usage

```yaml
name: Performance Analysis
uses: yourusername/pagespeed-insights-action@v1
with:
  url: 'https://example.com'
  gist-token: ${{ secrets.GIST_TOKEN }}
```

## Inputs

| Name | Description | Required | Default |
|------|-------------|----------|---------|
| `url` | URL to analyze | Yes | N/A |
| `gist-token` | GitHub token with Gist permissions | Yes | N/A |
| `badge-style` | Style for generated badges | No | 'flat' |
| `threshold-performance` | Minimum performance score | No | 90 |

## Outputs

| Name | Description |
|------|-------------|
| `performance-score` | Overall performance score |
| `report-url` | URL to detailed report |
| `badge-url` | URL to generated badge |

## Example Configuration

```yaml
name: Website Performance
on:
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: yourusername/pagespeed-insights-action@v1
        with:
          url: 'https://example.com'
          gist-token: ${{ secrets.GIST_TOKEN }}
```

## Development Status

This project is currently under active development. See our [ROADMAP.md](ROADMAP.md) for planned features and timeline.

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## Requirements

- Node.js 20+
- GitHub token with Gist permissions
- Google PageSpeed Insights API key (optional)

## Local Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build
pnpm build

# Lint
pnpm lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- [Google PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/get-started)
- [shields.io](https://shields.io)
- [GitHub Actions](https://github.com/features/actions)

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/pagespeed-insights-action/issues).

## Security

See [SECURITY.md](SECURITY.md) for reporting security vulnerabilities.

---
_This action is not affiliated with or endorsed by Google PageSpeed Insights._
