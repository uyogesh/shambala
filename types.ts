
import React from 'react';

export interface ServiceItem {
  id: string;
  icon?: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatar?: string;
}

export interface NavLink {
  href: string;
  label: string;
}
