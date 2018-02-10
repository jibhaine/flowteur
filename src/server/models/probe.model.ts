/**
 * Results from FFProbe command
 */
export interface Probe {
  filename?: string;
  guid?: string;
  streams: Stream[];
  format: Format;
}

export interface Stream {
  index?: number;
  disposition: any;
  tags: any;
}
export interface Format {
  filename?: string;
  nb_streams?: number;
  format_name?: string;
  format_long_name?: string;
  start_time?: string;
  duration?: string;
  size?: string;
  bit_rate?: string;
}
