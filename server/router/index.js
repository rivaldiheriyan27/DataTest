const { participantController } = require("../controllers/participantControllers");
const errorHandler = require("../middlewares/errorHandler");
const router = require("express").Router();

router.get("/", participantController.ParticipantAll)
router.get("/:id",participantController.Participant)


// router.post("/login", userController.login)
// router.post("/register", userController.register)


// router.use(authentication);

// router.get("/" , bookLibrary.bookData)
// router.get("/book/:id" , bookLibrary.bookDataDetail)
// router.get("/history", bookLibrary.history)
// router.post("/borrow", bookLibrary.borrowBook)
// router.put("/return", bookLibrary.returnBook)

// router.get("/listProduk", authorizationAdmin, bookLibrary)
// router.post("/addBook",authorizationAdmin, bookLibrary.addBook)


router.use(errorHandler);

module.exports = router;