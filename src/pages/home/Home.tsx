import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.scss'
import Menubar from '../../components/menuBar/MenuBar';
import { useDispatch, useSelector } from 'react-redux';
import { GetContact } from '../../api/GetContact';
import { ContactDetailModelType, ContactModelType } from '../../models/ContactModel';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { defaultAvatar } from '../../helpers/defaultAvatar';
import { useHistory } from 'react-router';
import { DeleteContact } from '../../api/DeleteContact';
import SearchBar from '../../components/searchBar/SearchBar';

const Home = () => {
    const [ contactList, setContactList ] = useState([] as ContactDetailModelType[]);
    const [ isToggleMenu, setIsToggleMenu ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ isFilled, setIsFilled ] = useState(false);
    const history = useHistory();


    useEffect(()=>{
        getContact()
    },[])

    const getContact = () => {
        GetContact().then((result) => {
            setContactList(result)
            console.log(result, 'apani')
        })
    }

    const toggleMenu = () => {
        setIsToggleMenu(!isToggleMenu);
    }

    const goToEdit = (id: string) => {
        history.replace(`/edit/${id}`)
    }

    const deleteHandler = (id:string) => {
        DeleteContact(id).then((res)=>{
            if(res) {
                alert('sukses')
                window.location.reload();
            }
            console.log(res,'apani4')
        })
    }

    const handleChange = (e: any) => {
        e.preventDefault();
        const { value } = e.target;
        setIsFilled(true)
        setSearch(value)
        console.log(value, 'apanisearch')
    }

    //Table Styling
    const StyledTableCell = withStyles((theme: Theme) =>
        createStyles({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }),
    )(TableCell);

    const StyledTableRow = withStyles((theme: Theme) =>
        createStyles({
            root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
            },
        }),
    )(TableRow);

    const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });
    
      const classes = useStyles();
    return (
        <div className="contact-home">
            <Menubar
                isToggleMenu={isToggleMenu}
                toggleMenu={toggleMenu}
            />
            <div className="contact-main">
                <div className="header">
                    <span className="title">Home</span>
                    <div className="line"/>
                </div>
                <div className="search-bar">
                    <SearchBar value={search} onChange={handleChange} placeHolder="Find Contact" />
                </div>
                <div className="contact-table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Profile Picture</StyledTableCell>
                                    <StyledTableCell align="left">First Name</StyledTableCell>
                                    <StyledTableCell align="left">Last Name</StyledTableCell>
                                    <StyledTableCell align="left">Age</StyledTableCell>
                                    <StyledTableCell align="center" colSpan={2}>Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {!search ? contactList.map((res, i) => (
                                <StyledTableRow key={res.id}>
                                    <StyledTableCell align="left">
                                        <img src={defaultAvatar(res.photo)} alt="photo" style={{width: '50px', height: '50px'}} />
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{res.firstName}</StyledTableCell>
                                    <StyledTableCell align="left">{res.lastName}</StyledTableCell>
                                    <StyledTableCell align="left">{res.age}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className="button-edit" onClick={() => goToEdit(res.id)}>Edit</button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className="button-delete" onClick={() => deleteHandler(res.id)}>Remove</button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            )) : contactList
                            // eslint-disable-next-line
                            .filter(res => {
                                if (!search) return true
                                if (res.firstName.toLowerCase().includes(search) || res.lastName.toLowerCase().includes(search)) {
                                    return true
                            }
                            })
                            .map(res =>  (
                                <StyledTableRow key={res.id}>
                                    <StyledTableCell align="left">
                                        <img src={defaultAvatar(res.photo)} alt="photo" style={{width: '50px', height: '50px'}} />
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{res.firstName}</StyledTableCell>
                                    <StyledTableCell align="left">{res.lastName}</StyledTableCell>
                                    <StyledTableCell align="left">{res.age}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className="button-edit" onClick={() => goToEdit(res.id)}>Edit</button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className="button-delete" onClick={() => deleteHandler(res.id)}>Remove</button>
                                    </StyledTableCell>
                                </StyledTableRow>
                                ))
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default Home;