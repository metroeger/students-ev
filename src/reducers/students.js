import { CREATE_STUDENT} from '../actions/students'
import { TOGGLE_RATE_STUDENT} from '../actions/students'

const students = [
      {
        _id: 'abcd123',
        name: "John, Doe",
        photo: "https://i2.wp.com/folkestonecomedy.co.uk/wp-content/uploads/2016/04/mysteryman.png",
        color: "",
        rated: false,
      },

      {
        _id: 'abcd124',
        name: "Jane, Doe",
        photo: "http://www.sheheroes.org/wp-content/uploads/2016/06/AnonymousWoman.png",
        color: "",
        rated: false,
      },
      {
        _id: 'abcd125',
        name: "Alina, Smith",
        photo: "http://www.sheheroes.org/wp-content/uploads/2016/06/AnonymousWoman.png",
        color: "",
        rated: false,

      },
      {
        _id: 'abcd126',
        name: "Lucky, Luke",
        photo: "https://i2.wp.com/folkestonecomedy.co.uk/wp-content/uploads/2016/04/mysteryman.png",
        color: "",
        rated: false,
      },
      {
        _id: 'abcd127',
        name: "Tom, Jerry",
        photo: "http://cdn.allrefer.com/images/2015/07/jerry-run-away-from-tom.jpg",
        color: "",
        rated: false,
      },
      {
        _id: 'abcd128',
        name: "Donald Duck",
        photo: "https://i2.wp.com/folkestonecomedy.co.uk/wp-content/uploads/2016/04/mysteryman.png",
        color: "",
        rated: false,
      },
      {
        _id: 'abcd129',
        name: "Mickey Moose",
        photo: "http://cd.sseu.re/mixed-seafood-paella.jpeg",
        color: "",
        rated: false,
      },
      {
        _id: 'abcd1240',
        name: "Cinderella Ceylon",
        photo: "http://www.sheheroes.org/wp-content/uploads/2016/06/AnonymousWoman.png",
        color: "",
        rated: false,
      },
      {
        _id: 'abcd131',
        name: "Monster Maui ",
        photo: "https://i2.wp.com/folkestonecomedy.co.uk/wp-content/uploads/2016/04/mysteryman.png",
        color: "",
        rated: false,
      },
      {
        _id: 'abcd156',
        name: "Billy Ocean",
        photo: "https://i2.wp.com/folkestonecomedy.co.uk/wp-content/uploads/2016/04/mysteryman.png",
        color: "",
        rated: false,
      },
    ]

export default function(state = students, action ={}){
    if (action.type === 'TOGGLE_RATE_STUDENT') {
      return state.map((student) => {
        if (student._id !==action.payload) return student
        return {...student, rated: !student.rated, color: "green"}
      })
  }
  return state

}
