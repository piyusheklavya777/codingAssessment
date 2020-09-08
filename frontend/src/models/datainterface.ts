// export default interface datainterface {
//     name: string,
//     id: number,
//     description: string,
//     startDate: string,
//     endDate: string,
//     time: string,
//     location: {
//         address: string,
//         city: string,
//         state: string
//     },
//     modes: {
//         inPerson: boolean,
//         online: boolean
//     },
//     imageUrl: string
// }

interface comm {
    commenter: string,
    title: string,
    comment: string,
    createdAt:string
}

export default interface datainterface {
    author: string,
    title: number,
    abstract: number,
    body: string,
    imageUrl: string,
    comments: comm[]
}

