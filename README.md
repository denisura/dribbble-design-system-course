# dribbble-design-system-course

##The Value of Design Systems
There are three typical benefits of design systems:

- Efficiency
- Consistency
- Innovation

### Further exploration

[Yes, Design Systems Do Improve Developer Efficiency and Design Consistency](https://sparkbox.com/foundry/design_system_roi_impact_of_design_systems_business_value_carbon_design_system), by Sparkbox

[How do design systems improve developer efficiency?](https://backlight.dev/blog/how-do-design-systems-improve-developer-efficiency) by Sonia Singla

## Seven common types of design systems

1. Desing system as brand identity or visual language
1. Desing system as projects
1. Desing system as tools and templates
1. Desing system as a digital product
1. Desing system as a process
1. Desing system as a service
1. Desing system as a practice

## Start the app

To start the development server run `nx serve www`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

## Storybook

Development

```
yarn nx storybook storybook-host
```

Build

```
yarn nx build-storybook storybook-host
```
