import React from 'react'
import ClientItem from './ClientItem'

const clients = [
  {
      "id": 1,
      "name": "James",
      "jobTitle": "Tech Support",
      "avatar": "http://www.iconninja.com/files/940/50/532/personal-information-user-account-customer-profile-icon.png"
  },
  {
      "id": 2,
      "name": "Robert",
      "jobTitle": "Programmer/Developer",
      "avatar": "http://www.iconninja.com/files/940/50/532/personal-information-user-account-customer-profile-icon.png"
  },
  {
      "id": 3,
      "name": "Michael",
      "jobTitle": "Information Security Analyst",
      "avatar": "http://www.iconninja.com/files/940/50/532/personal-information-user-account-customer-profile-icon.png"
  },
  {
      "id": 4,
      "name": "William",
      "jobTitle": "Web Developer",
      "avatar": "http://www.iconninja.com/files/940/50/532/personal-information-user-account-customer-profile-icon.png"
  },
  {
      "id": 5,
      "name": "David",
      "jobTitle": "Web Designer",
      "avatar": "http://www.iconninja.com/files/940/50/532/personal-information-user-account-customer-profile-icon.png"
  }
]

function searchForTerm(term) {
  return function(x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || x.jobTitle.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

export default class ClientList extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      clients: clients,
      searchTerm: ''
    };

    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(event) {
    this.setState( { searchTerm: event.target.value } )
  }

  render() {
    const { clients, searchTerm } = this.state

    return (
      <div className="clientList">
        <form>
          <input
            type="text" 
            placeholder="Start Typing..."
            value={searchTerm}
            onChange={this.searchHandler}> 
          </input>
        </form>
        
        <div className="clients">
          {clients && clients.filter(searchForTerm(searchTerm)).map((client, i) => 
            <ClientItem key={i} client={client} />
          )}
        </div>
      </div>
    )
  }
}
