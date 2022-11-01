import http from "@/http-common";
class BlogDataService {
  getAll(): Promise<any> {
    return http.get("/blogs");
  }

  get(id: number): Promise<any> {
    return http.get(`/blogs/${id}`);
  }

  // create(data: any): Promise<any> {
  //   return http.post("/tutorials", data);
  // }

  // update(id: any, data: any): Promise<any> {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id: any): Promise<any> {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll(): Promise<any> {
  //   return http.delete(`/tutorials`);
  // }

  // findByTitle(title: string): Promise<any> {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new BlogDataService();
