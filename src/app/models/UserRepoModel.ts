import { OwnerModel } from './OwnerModel';

export interface UserRepoModel {
  id: string;
  name: string;
  full_name: string;
  owner: OwnerModel;
  html_url: string;
  description: string;
  created_at: Date;
  language: string;
}
