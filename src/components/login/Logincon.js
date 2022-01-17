import React from "react";
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography, Checkbox, Button, Paper } from "@mui/material";

const styles = {
    box: {
        width: 450,
        height: 600,
        mt: 8,
        mb: 8
    },
    box1: {
        width: 400,
        height: 100,
        backgroundColor: '#CA965C',
        borderRadius: 3,
        textAlign: 'center'
    },
    box2: {
        width: 400,
        height: 350,
        backgroundColor: '#EEC373',
        borderRadius: 3,
        pt: 5,
        pb: 5
    },
    form: {
        width: 300,
        height: 50,
        pl: 2,
        pr: 2
    },
    box3: {
        width: 300,
        height: 50,
        backgroundColor: '#F4DFBA',
        borderRadius: 1,
    }
}
const Logincom = () => {
    return (
        <div>
            <Grid
                justifyContent="center"
                container>
                <Box sx={styles.box}>
                    <Grid container
                        justifyContent="center">
                        <Box sx={styles.box1}>
                            <Grid item>
                                <Typography variant="h3" sx={{
                                    fontFamily: 'Monospace',
                                    mt: 2
                                }}>LOGIN KUYY</Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{
                                    fontFamily: 'arial',
                                    mt: -1,
                                    fontSize: '12'
                                }}>biar bisa masuk</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container
                        justifyContent="center">
                        <Box sx={styles.box2}>
                            <Grid container
                                justifyContent='center'
                                direction="column"
                                alignItems="center"
                                spacing={3}>
                                <Grid item>
                                    <Box sx={styles.box3}>
                                        <TextField
                                            sx={styles.form}
                                            id="name-input"
                                            name="name"
                                            label="NAMA KAMU"
                                            type="text"
                                            variant="standard"
                                            color="warning" />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={styles.box3}>
                                        <TextField
                                            sx={styles.form}
                                            id="name-input"
                                            name="name"
                                            label="PASSWORD KAMU"
                                            type="password"
                                            variant="standard"
                                            color="warning" />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Button sx={{ color: 'white', background: '#876445', width: 100 }}>MASUK</Button>
                                </Grid>
                                <Grid item>
                                    <FormControl>
                                        <FormLabel>Check<a href="#">This</a></FormLabel>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Grid >
        </div >
    );
}
export default Logincom;