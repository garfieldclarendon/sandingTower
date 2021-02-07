export default {
    title: "Concists",
    name: "concists",
    type: "document",
    fields: [
        {
            title: "Number",
            name: "number",
            type: "number",
        },
        {
            title: "Owner",
            name: "owner",
            type: "reference",
            to: [{ type: 'user' }]
        }
    ]
}