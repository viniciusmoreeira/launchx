module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{lowerCase name}}.component.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{lowerCase name}}.style.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{lowerCase name}}.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{lowerCase name}}.type.ts',
        templateFile: 'templates/type.tsx.hbs'
      }
    ]
  })
}
