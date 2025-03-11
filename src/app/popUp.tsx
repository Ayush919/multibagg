import * as React from 'react';
import { Dialog, DialogContent, DialogActions, IconButton, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import logo from '../../public/logo.png'

// Styled Dialog
const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        backgroundColor: '#1a1a1a', // Black background
        color: '#fff',
        borderRadius: '12px',
        padding: theme.spacing(3),
        width: '500px', // Fixed width
        textAlign: 'center',
    },
}));

export default function AlertDialog({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <StyledDialog open={open} onClose={handleClose}>
            {/* Close Button */}
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: '#aaa',
                }}
            >
                <CloseIcon />
            </IconButton>

            {/* Logo */}
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Image src={logo} alt="Logo" width={160} height={42} />

                {/* Google Sign-In Button */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#EA4335',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '12px 0',
                        margin: '20px 0',
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: '#D93025',
                        },
                    }}
                    startIcon={<GoogleIcon />}
                >
                    Continue with Google
                </Button>
            </DialogContent>

            {/* Terms and Privacy */}
            <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Typography variant="body2" color="#9ca3af">
                    By proceeding, you agree to our{' '}
                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Terms of Service</span> and{' '}
                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>.
                </Typography>
            </DialogActions>
        </StyledDialog>
    );
}
