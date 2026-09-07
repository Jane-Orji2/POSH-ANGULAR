<<<<<<< HEAD
# PoshAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======

   # Posh — Angular Rebuild

An Angular rebuild of the Posh landing page (originally plain HTML/CSS/JS),
built using standalone components, Signals, typed interfaces, `@if`/`@for`
control flow, `@Input()`/`@Output()` component communication, routing, and
Reactive Forms.

- **Original page:** https://prium.github.io/Posh/v2.1.0/

## How to run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/posh-angular.git
   cd posh-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   ng serve
   ```

4. Open your browser to `http://localhost:4200`

## Project structure

```
src/app/
  app.ts / app.html / app.css      Root shell: navbar + <router-outlet> + footer
  app.routes.ts                    Route definitions ('/' and '/about')
  app.config.ts                    Provides the router to the app

  nav-bar/                         Nav links rendered from an array with @for,
                                    mobile menu open/closed state driven by a Signal

  components/hero/                 @Input() for headline/subtext/CTA label,
                                    @Output() ctaClicked event instead of inline onclick

  components/body/showcase/        Typed Showcase[] data rendered with @for,
                                    replacing hand-copied demo HTML

  contact/                         Reactive Form with custom validators,
                                    a disabled-until-valid submit button,
                                    and a Signal-driven "thanks" success state

  footer/                          Live copyright year via `new Date().getFullYear()`

  about/                           Second route, demonstrating the Router

  shared/
    models/showcase.model.ts       Showcase interface
    validators/
      not-blank.validator.ts       Custom validator: rejects blank/whitespace-only input
      min-words.validator.ts       Custom validator: enforces a minimum word count
```

## How the page was split into components

The landing page was broken down by section rather than built as a single
monolithic template. `HomeComponent` acts as the page-level container and
composes `HeroComponent`, `ShowcaseComponent`, and `ContactComponent`
together. Data flows one way through the tree: parent components pass data
down to children with `@Input()`, and children notify parents of events —
like the hero's call-to-action click — with `@Output()`, rather than
components reaching into each other's state directly. The `NavbarComponent`
and `FooterComponent` live outside the routed content, in the root shell, so
they persist across both the Home and About pages while `<router-outlet>`
swaps out the page-specific content underneath them. The showcase grid is
rendered from a typed `Showcase[]` array using `@for`, and the contact form —
which didn't exist as a working form in the original static page — was built
with Reactive Forms, including custom validators and a success state managed
by a Signal.






   
>>>>>>> 3fca68a00015f7a787139a555a9422e6dbc48413
