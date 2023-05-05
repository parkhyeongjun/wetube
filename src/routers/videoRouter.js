import express from "express";
import { 
    watch, 
    getEdit, 
    deleteVideo, 
    upload,
    postEdit
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload)

videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);

videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/:id(\\d+)", watch);

export default videoRouter