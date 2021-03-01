const fs = require('fs')
const path = require('path')

const directory: string = path.join(__dirname, './icons')
const files: string[] = fs.readdirSync(directory)

Promise.all(files.map(generateSVG))
  .then((iconNames) => {
    const index: string = iconNames.reduce((index, iconName) => {
      index += `export { default as ${iconName} } from './components/${iconName}.vue'\n`
      return index
    }, '/* eslint-disable import/prefer-default-export */\n')

    fs.writeFileSync(path.join(__dirname, 'index.ts'), index)
  })

async function generateSVG (iconFilename: string): Promise<string> {
  const iconPath: string = path.join(directory, iconFilename)
  const iconName: string = toPascalCase(iconFilename.slice(0, -4)) + 'Icon'
  const componentPath: string = path.join(__dirname, './components/', iconName + '.vue')

  const svg: string = await fs.promises.readFile(iconPath, 'utf-8')
  await fs.promises.writeFile(componentPath, wrapSVGInTemplate(iconName, svg))

  return iconName
}

function toPascalCase (string: string): string {
  return string
    .split(/[_-]/)
    .map((segment: string) => segment.charAt(0).toLocaleUpperCase() + segment.slice(1))
    .join('')
}

function wrapSVGInTemplate (name: string, svg: string): string {
  return `
<template functional>
${svg.trim()}
</template>

<script>
export default {
  name: '${name}',
}
</script>
`.trim()
}
