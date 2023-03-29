import { describe, expect, test, vi, beforeEach } from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import CustomConversion from './CustomConversion';

describe('Component customConversion rendered', () => {
	beforeEach(() => {
		render(<CustomConversion>test</CustomConversion>);
	});

	test('Component has a className of container'),
		() => {
			const conv = screen.getByText(/test/i).closest('CustomConversion');
			expect(conv.classList.contains('container')).toBeTruthy();
		};
});
