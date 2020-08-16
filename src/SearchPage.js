import React from 'react';
import './SearchPage.css';
import TuneOutlineIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlineIcon />
                    <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            verified
            subs="100k"
            noOfVideos={100}
            description="Its Test"
            />
            <hr />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
            <VideoRow
            title="Test"
            views="100K"
            subs="100K"
            timestamp="1 days ago"
            channelImage="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            channel="Sameer"
            image="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg"
            />
        </div>
    )
}

export default SearchPage
