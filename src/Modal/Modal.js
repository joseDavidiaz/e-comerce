es (11 sloc)  275 Bytes
   
import Dialog from '@mui/material/Dialog';

const ModalCustom = ({handleClose, open , children}) => {
    return(
        <>
            <Dialog onClose={handleClose} open={open}>
                {children}
            </Dialog>
        </>
    )
}
export default ModalCustom