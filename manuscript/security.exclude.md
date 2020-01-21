https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security

## XSS
The best defense against XSS vulnerabilities is to remove or disable any markup that can potentially contain instructions to run the code. For HTML this includes elements, such as:

- <script>
- <object>
- <embed>
- <link>

**Sanitization:**  The process of modifying user data so that it can't be used to run scripts or otherwise affect the execution of server code is known as input sanitization.


## SQL Injection

Intended statement
```sql
"SELECT * FROM users WHERE name = '" + userName + "';"
```

Modified & malicious statement
```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Excaped malicious statement
```
SElECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
```
