import http from "@/http-common";
import Blog from "@/types/Blog";

class BlogDataService {
  getAll(): Promise<any> {
    return http.get("/blogs");
  }

  get(id: number): Promise<any> {
    return http.get(`/blogs/${id}`);
  }

  create(data: Blog): Promise<any> {
    return http.post("/blogs", data);
  }

  update(id: number, data: Blog): Promise<any> {
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
