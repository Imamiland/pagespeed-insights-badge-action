// SPDX-FileCopyrightText: 2024 Ali Sajid Imami
//
// SPDX-License-Identifier: MIT

import * as core from '@actions/core';
import { PageSpeedApiClient } from './core/api-client';

async function run(): Promise<void> {
    try {
        const url = core.getInput('url');
        const apiClient = new PageSpeedApiClient();
        // Future implementation
    } catch (error) {
        core.setFailed(error instanceof Error ? error.message : 'Unknown error');
    }
}

run();
