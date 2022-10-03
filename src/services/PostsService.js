import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api, SandboxServer } from "./AxiosService.js";


class PostsService {

  async getPost(page = '') {
    AppState.posts = []
    const res = await SandboxServer.get(page)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.newerPage = res.data.newer
    AppState.olderPage = res.data.older
    console.log(res.data)
  }

  async getPostByCreatorId(creatorId) {
    AppState.posts = []
    const res = await api.get(`api/posts`, {
      params: {
        creatorId
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
  }
  async createPosts(formData) {
    const res = await api.post('/api/posts', formData)
    AppState.posts.push(new Post(res.data))
  }

  async deletePosts(id) {
    const res = await api.delete(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }



}
export const postsService = new PostsService