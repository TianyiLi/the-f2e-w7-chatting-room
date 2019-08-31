export interface IState {
  name: string,
  userImg: number,
  channel: string,
  uuid: string,
  friends: IFriends,
  chat: IChatMessageStack[],
  imgUtil: {
    obj: FileList | undefined
  },
  fileUtil: {
    obj: FileList | undefined
  },
  imgViewer: IImgViewer
}

export interface IFriends {
  name: string
  active: number
  img: number
  defaultColor: string
}

export interface IChatMessageStack {
  name: string
  color: string
  userImg: number
  created_at: string
  contentText?: string
  contentImg?: string[]
  contentFiles?: {
    name: string,
    src: string
  }[]
}

export interface IPostChatMessageStack {
  name: string
  color: string
  userImg: number
  created_at: string
  contentText?: string
  contentImg?: FileList
  contentFiles?: FileList
}

export interface IImgViewer {
  src: string
  isShow: boolean
}
