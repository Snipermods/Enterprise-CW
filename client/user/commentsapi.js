const list = async (signal) => {
    try {
      let response = await fetch('/api/comments/', {
        method: 'GET',
        signal: signal,
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  const create = async (comments) => {
    try {
        console.log(comments);
        let response = await fetch('/api/comments/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comments)
        })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const remove = async (commentid, credentials, userid) => {
    try{
    console.log("deleted shiz", commentid);
    let response = await fetch('/api/commentid/' + userid + "/" + commentid,{
      method: 'DELETE',
      headers: {

        'Accept': 'application/json',
        
        'Content-Type': 'application/json',
      
        'Authorization': 'Bearer ' + credentials.t
    }
  })
  return await response.json()
  } catch(err) {
    console.log(err)
  }}
  
  export {
    list,
    create,
    remove
    
  }

  