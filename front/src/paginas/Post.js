import React from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const Post = () => {
    const {postId} = useParams();
    const [post, setListaPosts] = React.useState([]);
    const [replies, setListaReplies] = React.useState([]);
    const [reply, setReply] = React.useState('');

    const newReply = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('blog/api/v1/rest/reply', {
                reply,
                id_post: postId
            });

            setReply('');

            alert('Comentario criado com sucesso!!!');
            window.location.reload();
        } catch (error){
            console.log(error);
        }
    }

    const deleteReply = async (id) => {

        try {
            console.log(id)
            await axios.delete('blog/api/v1/rest/reply/' + id);
            window.location.reload();
        } catch (error){
            console.log(error);
        }
    }

    React.useEffect(()=>{
        const res = axios.get("blog/api/v1/rest/post/"+postId);
        res.then((query) => {
            setListaPosts(query.data);
            console.log(query.data);
        })
        const res2 = axios.get("blog/api/v1/rest/postreply/"+postId);
        res2.then((query) => {
            setListaReplies(query.data);
            console.log(query.data);
        })
    }, []);


    return (
        <div>
          {post && (
            <div className='row'>
                <h1>{post.title}</h1>
                <h2>{post.post}</h2>
                <h5>Post #{post.id}, created {post.createdAt},
                    updated {post.updatedAt}</h5>
                <div className='row'>
                    <div className='replies'>
                        <form onSubmit={newReply}>
                            <label htmlFor="title">Adicionar comentário:</label>
                            <div>
                                <input type='text' id='title' value={reply} 
                                onChange={(e)=>setReply(e.target.value)}
                                />
                                <button type='submit'>OK</button>
                            </div>
                        </form>
                    </div>
                    {replies.length > 0 && (<table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Resposta</th>
                                <th>Criado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {replies.map((reply, index) => (
                                <tr key={index}>
                                <td>{reply.id}</td>
                                <td>{reply.reply}</td>
                                <td>{reply.createdAt}</td>
                                <td><button onClick={_=>{deleteReply(reply.id)}}>deletar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )}
                </div>
            </div>

        )}
        </div>
      )

}

export default Post;