import React, {useState} from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import "../categories/addCategory.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/utils/Message";
import { createCategory } from "../../../actions/categoryActions";

const AddCategory = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    const categoryCreate = useSelector((state) => state.categoryCreate);
    const { loading, success, error } = categoryCreate;

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("category_title", title);
        

        dispatch(createCategory(formData));

    };

    return (
        <>
            <div className="categoryAdd">
                {error && <Message variant="error">{error}</Message>}
                {error && <Message variant="success">{error}</Message>}
                <Grid>
                    <Card className="form">
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Add new category
                            </Typography>
                            <form onSubmit={submitHandler}>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <TextField
                                            placeholder="Enter category title"
                                            label="Category Title"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="success"
                                            fullWidth
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </>
    )};
    
                                        
export default AddCategory;