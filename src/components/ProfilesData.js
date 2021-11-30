import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useAllImages from '../utils/useAllImages';
import {Box, Typography, Card, CardContent, 
        IconButton, CardMedia} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment'
import Loader from './Loader';

const ProfilesData = () => {

    const [newPage, setNewPage] = useState(1)

    const [data, setData, isLoader] = useAllImages(newPage) 

    return isLoader ? (<Loader/>) : (
        <div>
            <h3>All Users with photo and details</h3>
            <InfiniteScroll
            dataLength={data.length}
            next={() => setNewPage(newPage+1)}
            hasMore={true}
            loader={<Loader/>}
            >
      {data &&
        data.map((item, index) => (
            <>
            <Card sx={{ display: 'flex'}} key={item.login.uuid}>
            <CardMedia
              component="img"
              sx={{ width: 480, height:320}}
              image={item.picture.large}
              alt="Images"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h2">
                  {item.name.first + " " + item.name.last}
                </Typography>
                    <Typography variant="h4" color="text.secondary">
                      {moment().diff(item.dob.date, 'years')} yrs
                    </Typography>
                    <span style={{display:'flex', flexWrap:'wrap'}}>
                    <LocationOnIcon />{" "} 
                    <Typography variant="h5" color="text.secondary">
                        {item.location.city + ", " + item.location.state + ", " + item.location.country}
                    </Typography>
                    </span>
              </CardContent>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h5" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                            inventore consectetur, neque doloribus, cupiditate numquam 
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                            inventore consectetur, neque doloribus, cupiditate numquam 
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                            inventore consectetur, neque doloribus, cupiditate numquam 
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                            inventore consectetur, neque doloribus, cupiditate numquam 
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="add to favorites">
                       <FavoriteIcon />
                     </IconButton>
                     <IconButton aria-label="share">
                       <ShareIcon />
                     </IconButton>
              </Box>
            </Box>
            
          </Card>
          <hr/>
          </>   
        ))}
        </InfiniteScroll>
        </div>
    );
}

export default ProfilesData