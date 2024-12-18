// SPDX-FileCopyrightText: 2024 Ali Sajid Imami
//
// SPDX-License-Identifier: MIT

export interface PageSpeedInsightsResponse {
  captchaResult?: string
  kind: 'pagespeedonline#result'
  id: string
  loadingExperience: LoadingExperience
  originLoadingExperience: LoadingExperience
  lighthouseResult: LighthouseResult
  analysisUTCTimestamp: string
  version: {
    major: number
    minor: number
  }
}

interface LoadingExperience {
  id: string
  metrics: {
    [key: string]: {
      percentile: number
      distributions: Array<{
        min: number
        max: number
        proportion: number
      }>
      category: string
    }
  }
  overall_category: string
  initial_url: string
}

interface LighthouseResult {
  requestedUrl: string
  finalUrl: string
  lighthouseVersion: string
  userAgent: string
  fetchTime: string
  environment: {
    networkUserAgent: string
    hostUserAgent: string
    benchmarkIndex: number
  }
  runWarnings?: any[]
  configSettings: {
    emulatedFormFactor: string
    locale: string
    onlyCategories?: any
  }
  audits: {
    [key: string]: AuditItem
  }
  categories: {
    [key: string]: CategoryItem
  }
  categoryGroups?: {
    [key: string]: {
      title: string
      description?: string
    }
  }
  runtimeError?: {
    code: string
    message: string
  }
  timing: {
    total: number
  }
  i18n: {
    rendererFormattedStrings: {
      [key: string]: string
    }
  }
}

interface AuditItem {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: string
  displayValue?: string
  explanation?: string
  errorMessage?: string
  warnings?: any
  details?: {
    [key: string]: any
  }
}

interface CategoryItem {
  id: string
  title: string
  description: string
  score: number | null
  manualDescription?: string
  auditRefs: Array<{
    id: string
    weight: number
    group?: string
  }>
}
