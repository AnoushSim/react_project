import ContentService from "../services/contentService";
import { toast } from 'react-toastify';
import {EDIT_CONTENT,
        GET_CONTENT,
        DELETE_CONTENT,
        ADD_CONTENT} from './types';


export function getAction() {
    return dispatch => {
        return ContentService.get('/content')
            .then(res => {
                /*if(!res.success)
                     toast.error(res.message)*/
                let content = [];
            if(res){
                 content = res.body;
            }


                if(content.length === 0) {
                    content.push({subtitle: '', text: '', code: ''})
                }

                dispatch({
                    type: GET_CONTENT,
                    content: content
                })

            })
    }
}


export function saveAction(object,content){
   return dispatch => {
       return ContentService.put('/content?subtitle=' + object.subtitle, content)
           .then(res => {
               if(res.data.success){

                   toast.success('Updated!');
                   dispatch({
                       type: EDIT_CONTENT,
                       updated: content,
                       subtitle: object.subtitle
                   })
               }
               else
                   toast.error(res.message || 'Cannot update.');
           })

   }
}

export function deleteAction(subtitle){
    return dispatch => {
        if (subtitle === '') {
            dispatch({
                type: DELETE_CONTENT,
                deleted: ''
            })
        }
        else {
            return ContentService.remove('/content?subtitle=' + subtitle)
                .then(res => {
                    if (res.data.success) {
                        toast.success('Deleted!');

                        dispatch({
                            type: DELETE_CONTENT,
                            deleted: subtitle
                        })
                    }

                    else
                        toast.error(res.message || 'Cannot delete.');
                })
        }
    }
}

export function  addAction(){
    return dispatch => {
        dispatch ({
            type: ADD_CONTENT
        })


    }
}
