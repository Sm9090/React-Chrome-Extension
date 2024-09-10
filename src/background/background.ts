chrome.runtime.onInstalled.addListener(() => {
    console.log("clicked ")
})

chrome.bookmarks.onCreated.addListener(() => {
    console.log("bookmarked")
  })