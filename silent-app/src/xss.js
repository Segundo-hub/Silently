const sanitize = (data = {}) => {
   if (!data.target) TypeError('Introduce la opcion target')
   let txt = data.target.value
   return txt.toLowerCase().replace(/[\<\/\>]/g, "")
}

const dom = {
   value: 'scr<script>ipt>hola mundo</scri</script>pt>'
}

const sanitiz = sanitize({
   target: dom
})

console.log(sanitiz)