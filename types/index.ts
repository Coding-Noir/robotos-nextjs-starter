export type ColumnItem = {
  boldText: string;
  title: string;
};

export type ColumnImageProps = {
  name?: string;
  image?: string | null;
  imageAlt?: string;
  items?: ColumnItem[];
};
