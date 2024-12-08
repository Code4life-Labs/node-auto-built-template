# NodeTS auto-built template

Develop faster, easier with this template

## How to use?

### Create endpoints

If you want to create a group of endpoints, you can use the script `setup/create-endpoint.js`. For example, I want to create a person with 2 endpoints are

- Method: `Post`, Endpoint: `/person/:id`
- Method: `Get`, Endpoint: `/person/:id`

You can use this command

```
node setup/create-endpoint.js -r person -e [get]:id -e [post]:id
```

The result is

<p align="center"><img src="https://github.com/user-attachments/assets/f9de09c8-9894-4c13-9e07-c605eb81e7c8" /></p>

Then, you can run `npm run dev` to see the result

<p align="center"><img src="https://github.com/user-attachments/assets/5381552a-bba9-4d0a-93fb-1b1ec4600fd6" /></p>
