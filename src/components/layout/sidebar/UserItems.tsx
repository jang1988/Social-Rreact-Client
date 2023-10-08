import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const UserItems = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/profile">
                    <Box sx={{ position: 'relative', marginRight: 5 }}>
                        <img
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                            alt=""
                        />

                        <Box
                            sx={{
                                backgroundColor: 'green',
                                width: 4,
                                height: 4,
                                position: 'absolute',
                                bottom: 2,
                                left: 2,
                            }}
                        />
                    </Box>
                    <span>Petro Baklay</span>
                </Link>
            </Box>
        </>
    );
};

export default UserItems;
