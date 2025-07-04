export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Accessible React Components',
    excerpt: 'Learn how to create React components that work for everyone, including users with disabilities. We\'ll cover ARIA attributes, keyboard navigation, and testing strategies.',
    content: `
# Building Accessible React Components

Accessibility is not just a nice-to-have feature—it's essential for creating inclusive web applications. In this post, we'll explore how to build React components that work for everyone.

## Why Accessibility Matters

Web accessibility ensures that people with disabilities can use your applications effectively. This includes users who:
- Use screen readers
- Navigate with keyboards only
- Have visual impairments
- Have motor difficulties

## Key Principles

### 1. Semantic HTML
Always use semantic HTML elements as the foundation of your components.

### 2. ARIA Attributes
Use ARIA attributes to provide additional context for assistive technologies.

### 3. Keyboard Navigation
Ensure all interactive elements are keyboard accessible.

## Implementation Examples

We'll walk through creating accessible buttons, forms, and modal dialogs with practical code examples.
    `,
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Accessibility', 'Frontend'],
    published: true
  },
  {
    id: '2',
    title: 'TypeScript Best Practices for React Projects',
    excerpt: 'Discover essential TypeScript patterns and practices that will make your React applications more maintainable and less prone to bugs.',
    content: `
# TypeScript Best Practices for React Projects

TypeScript has become the standard for building robust React applications. Here are the best practices I've learned from years of TypeScript development.

## Project Setup

Start with a solid TypeScript configuration that catches errors early and provides excellent developer experience.

## Component Typing

Learn how to properly type your React components, props, and state for maximum type safety.

## Advanced Patterns

We'll cover advanced patterns like generic components, discriminated unions, and utility types.
    `,
    date: '2024-01-08',
    readTime: '12 min read',
    tags: ['TypeScript', 'React', 'Best Practices'],
    published: true
  },
  {
    id: '3',
    title: 'The Art of Minimal Web Design',
    excerpt: 'Exploring the principles of minimalist design and how to apply them to create clean, effective web interfaces that users love.',
    content: `
# The Art of Minimal Web Design

Minimalism in web design isn't just about using less—it's about using the right elements to create maximum impact.

## Principles of Minimal Design

1. **White Space**: Use space intentionally
2. **Typography**: Choose fonts that communicate clearly
3. **Color**: Limit your palette for consistency
4. **Functionality**: Every element should serve a purpose

## Case Studies

We'll examine successful minimal designs and analyze what makes them effective.
    `,
    date: '2024-01-01',
    readTime: '6 min read',
    tags: ['Design', 'UI/UX', 'Minimalism'],
    published: true
  }
];