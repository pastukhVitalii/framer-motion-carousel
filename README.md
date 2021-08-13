# Framer motion

## Available Scripts



### `yarn start`
##props animate 
фізичні властивості (x, scale) анімуються типом spring
а, opacity і color типом tween
`transition={{ ease: "easeOut", duration: 2 }}`

властивість може приймати масив значень. Початковим значенням властивості буде перший
 елемени масиву, далі анімація згідно свого типу чи тривалості перейде до наступних значень
 `animate={{opacity: [0.3, 1, 0.3]}}`
 
##props initial 
Описує початковий стан елемента
initial={false} вимикає анімацію при загрузці сторінки

##variants

`const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}`

`<motion.div
   initial="hidden"
   animate="visible"
   variants={variants}
 />`
variant можна прокидувати в компоненти як пропси

## transition
По дефолту анімація розпочинається одночасно
З допомогою transition і параметрів 
`when, delayChildren, staggerChildren` можна керувати порядком анімації