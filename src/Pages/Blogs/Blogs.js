import React from 'react';

const Blogs = () => {
    return (
        <div className='m-10 text-blue-600'>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Difference between SQL and NoSQL
                </div>
                <div className="collapse-content"> 
                    <p>SQL databases are primarily called as Relational Databases (RDBMS), whereas NoSQL database are primarily called as non-relational or distributed database.In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.
                    SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). </p>
        
                </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work?
                </div>
                <div className="collapse-content"> 
                    <p> JWT was built by some developers in Microsoft, they built it initially for information exchange, and later on it was repurposed for authorization.
                    A JWT is composed by : header , payload , signature. The Header is the metadata about the token. The payload contains the message we want to send alongside with different information about the token itself.
                    it is not encrypted it's just encoded which means you can use base64 decode and you will get the JSON object in clear. A signature is the result of some function that uses the header, the payload a secret key and hash function.
                    This creates an HMAC encryption (Hash-based message authentication code) a cryptographic technique that combines the key and a hash into a mix hackers can't unpack.
                    </p>
                </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content"> 
                    <p> JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
                    </p>
                </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content"> 
                    <p> Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.
                    </p>
                </div>
        </div>
        </div>
        
        
    );
};

export default Blogs;