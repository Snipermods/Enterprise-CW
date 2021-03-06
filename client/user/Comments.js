import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Person from '@material-ui/icons/Person'
import {Link} from 'react-router-dom'
import {list, remove} from './commentsapi.js'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Icon from '@material-ui/core/Icon'

import {create} from './commentsapi'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'



const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    }
  }))

export default function createComments() {
  const classes = useStyles()
  const [comments, createComments] = useState([])
  const jwt = auth.isAuthenticated()

  
  const [values, setValues] = useState({
      comments: '',
      open: false,
      error: ''
  })

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        createComments(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])

  
  const handleChange = comment => event => {
      setValues({ ...values, [comment]: event.target.value})
  }
  
  const clickSubmit = () => {
    const comment = {
      comment: values.comments || undefined,
      name: auth.isAuthenticated().user.name, 
      userid: auth.isAuthenticated().user._id  
    }
    create(comment).then((data) => {
      if (data.error) {
        console.log("1", comment);
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
        console.log("2", comment);
      }
    })
    location.reload();
  }
  
  
  
  
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        createComments(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])

  function commentremove (comment){
    remove(comment, {t: auth.isAuthenticated().token}, auth.isAuthenticated().user._id).then((data)=>{
      location.reload();
    })

  }


    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
          Comments
        </Typography>
        <List dense>
         {comments.map((item, i) => {

          return (<div>
                    <ListItem button>
                      
                      <ListItemText primary={item.comment}/>
                      <button size = "small" onClick={()=> commentremove(item._id)} >Delete</button>
                      
                    </ListItem>
                    

  </div>  )})     
          
         }
         
         <TextField id="inputbox" label="Please add your comment here : " className={classes.textField} value={values.comments} onChange={handleChange('comments')} margin="normal"/><br/>   
         {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
              
          }
          
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
          
          </List>
          
    </Paper>

        
      
    )

    
    
}
