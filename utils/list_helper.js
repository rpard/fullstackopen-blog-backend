const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) return null

  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  return blogs.reduce((favorite, blog) =>
    blog.likes > favorite.likes ? blog : favorite
  )
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  const grouped = _.countBy(blogs, 'author')
  const topAuthor = _.maxBy(Object.keys(grouped), author => grouped[author])

  return {
    author: topAuthor,
    blogs: grouped[topAuthor]
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  const likesByAuthor = {}

  blogs.forEach(blog => {
    likesByAuthor[blog.author] = (likesByAuthor[blog.author] || 0) + blog.likes
  })

  let topAuthor = null
  let maxLikes = 0

  for (const author in likesByAuthor) {
    if (likesByAuthor[author] > maxLikes) {
      topAuthor = author
      maxLikes = likesByAuthor[author]
    }
  }

  return {
    author: topAuthor,
    likes: maxLikes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}