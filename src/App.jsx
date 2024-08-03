import React from 'react'
import { Typography, Button, Grid, Container, AppBar, CssBaseline, Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'
const App = () => {
  const cards = [1, 2, 3, 4, , 5, 6, 7, 8, 9];
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar} position='relative'>
        <PhotoCamera className={classes.icon} />
        <Typography variant="h6" color="inherit" >
          Photo Album
        </Typography>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Typography variant="h3" color="inherit" align='center' style={{ marginTop: "20px" }} gutterBottom>
            Photo Album
          </Typography >
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it lokk like on the screen.
          </Typography>
          <div>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  Add Photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Delete Photos
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {
              cards.map((card) => {
                return (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image='https://th.bing.com/th/id/OIP.mneB2Cdaicy7TmLDnOqMxQHaEQ?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                        title="Image Title" />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5'>
                          Heading
                        </Typography>
                        <Typography gutterBottom paragraph>
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                        <CardActions>
                          <Button color='primary' size='small'>View</Button>
                          <Button color='primary' size='small'>Edit</Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid>
        </Container>
      </main>\
      <footer>
        <Typography variant='h6' color='inherit' align='center' gutterBottom>
          All copyright &copy; and license information Issued.
        </Typography>
      </footer>
    </>
  )
}

export default App