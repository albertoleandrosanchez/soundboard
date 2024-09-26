export interface Sound {
  id: number;
  title: string;
  description?: string;
  url: string;
  user?: number;
  favourite?: boolean;
  tags?: Array<string>;
  duration?: number;
  img?: string;
}
