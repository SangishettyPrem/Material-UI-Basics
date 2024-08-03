import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
        padding: "20px 10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    }, icon: {
        marginRight: "10px",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9 aspect ratio
        borderRadius: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        },
    },
    cardContent:{
        flexGrow: 1,
    }
}))

export default useStyles;