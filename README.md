# React/Flask Challenge <br/>
**Context:** María is a finance professional. She currently works as the head of the credit and collections department at a prestigious financial institution in the country. María and her team often work late because many of their tasks are performed manually using spreadsheets. Our team has been hired to build a solution that provides María and her team with the agility to approve more loans in less time while maintaining a much higher level of quality than the current process. <br/>

**User Story:** Approve loans based on indicators <br/>

As María, I want to be able to approve loans based on indicators so that the quality of approved operations is the best and we do not end up with a large delinquent portfolio. <br/>

**Acceptance Criteria** <br/>

Given that my profile in the system allows me to approve loans,
When I receive a request to approve a personal loan for an amount less than or equal to 50 thousand dollars and I want to know whether to approve or deny the request, the system must allow me to analyze the client's indicators. <br/>
Then, the system must show me a dashboard with the loan requests pending approval. For each request, the system must allow me to analyze the total amount of debt registered by the SBS (Superintendency of Banking, Insurance, and AFP) for this client. Additionally, it must show me the client's credit score through the Sentinel risk center (for this case, this indicator can be good, fair, or poor). Finally, it must show me the indicator from our artificial intelligence algorithm that supports my decision (this indicator shows a score from 1 to 10, where 10 is a safe loan and 1 is a loss). Lastly, it must allow me to approve or deny the loan request with a button. <br/>

**Considerations:** Both the total debt amount registered in the SBS, the Sentinel indicator, and the artificial intelligence algorithm are fictional. Use any values that make sense for the story when building the case. <br/>

# SETUP

## **API**
- In the file explorer, navigate to *Api/api/config*.
- Open the file *default.py*.
- On the 6th line of code, you will find the variable *SQLALCHEMY_DATABASE_URI*, which must be replaced with your database credentials using the following format: `'postgresql://{user}:{pass}@{servername or default localhost}:{port}/{database name}'`.
- Open a CMD and navigate to the *Api/api* folder.
- Run the command *pip install virtualenv*.
- Run the command *virtualenv .*.
- Run the command *Scripts\activate*.
- Run the command *pip install -r requirements.txt*.
- Run the command *flask db init*.
- Run the command *flask db migrate -m "Initial_db"*.
- Run the command *flask db upgrade*.
- Run the command *flask run*.

## **Frontend**
- Open a CMD and navigate to the *Frontend* folder.
- Run the command *npm install*.
- Run the command *npm start*.
- Open your browser and go to *http://localhost:3000/*.
