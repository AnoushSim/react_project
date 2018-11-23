import {GET_CONTENT, EDIT_CONTENT, DELETE_CONTENT, ADD_CONTENT} from '../../actions/types';


const initialState = {
    data: {}
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_CONTENT:
            return {
                content: action.content
            };

        case EDIT_CONTENT: {

            let data = state.content.slice();  ///hishel minchev maaaaaah
            let subtitle = action.subtitle;
            let updated = action.updated;
            let contain = data.find( elem => {
                return elem.subtitle === subtitle;
            });

            if(contain) {
                data.forEach( elem => {
                    if(elem.subtitle === subtitle) {
                        elem.subtitle = updated.subtitle || elem.subtitle;
                        elem.text = updated.text || elem.text;
                        elem.code = updated.code || elem.code;
                    }
                })
                return {
                    content: data
                }
            }
            else {
                data.push(
                    {
                        subtitle:updated.subtitle,
                        text:updated.text,
                        code: updated.code
                    })
                return {
                    content:data
                }
            }
        }

        case DELETE_CONTENT: {

            let data = state.content;
            let subtitle = action.deleted;

            data = data.filter(function(item) {
                return item.subtitle !== subtitle
            });
            return {
                content: data
            };

        }
        case ADD_CONTENT: {
            let data = state.content;
            data.push({subtitle: '', text: '', code: ''});
            return {
                content: data
            }
        }

        default: {
            return state;
        }

    }
};

export default mainReducer;
