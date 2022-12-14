import http from "@/http-common";
import Blog from "@/types/Blog";

class BlogDataService {
  getAll(page: number): Promise<any> {
    return http.get(`/blogs?page=${page}`);
  }

  get(id: number): Promise<any> {
    return http.get(`/blogs/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/blogs", data);
  }

  update(id: number, data: any): Promise<any> {
    return http.put(`/blogs/${id}`, data);
  }

  delete(id: number): Promise<any> {
    return http.delete(`/blogs/${id}`);
  }

  // deleteAll(): Promise<any> {
  //   return http.delete(`/tutorials`);
  // }

  // findByTitle(title: string): Promise<any> {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new BlogDataService();
