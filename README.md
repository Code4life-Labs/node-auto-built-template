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

**INSERT IMAGE HERE**

Then, you can run `npm run dev` to see the result

**INSERT IMAGE HERE**
