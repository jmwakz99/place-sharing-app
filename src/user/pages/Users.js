import React from 'react'

import UsersList from '../components/UsersList';



const Users = () => {
    const USERS = [
        {
            id: 'u1', name:
                'Johnson Mwakazi',
            image: 'https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_teaser_image/2020-05/avatarshutterstock_548848999.jpg?itok=0Opz83WK',
            places: 3
        }
    ];
    return <UsersList items={USERS} />
}

export default Users;