import View from '../core/view';

export interface Store {
  currentPage: number;
  feeds: NewsFeed[];
}

export interface News { //인터섹션, 타입알리아스
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}
export interface NewsFeed extends News {
  readonly comments_count: number;
  readonly points: number;
  read?: boolean; //옵셔널
}
export interface NewsDetail extends News {
  readonly comments: NewsComment[];
}
export interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level: number;
}

export interface RouteInfo {
  path: string;
  page: View;
}
