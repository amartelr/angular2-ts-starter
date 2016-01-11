//import the bootsrtap from angular
import {bootstrap}    from 'angular2/platform/browser'

// load our our components
import {NavComponent} from './components/nav.component'
import {HelloWorldComponent} from './components/hello-world'
import {HeroComponent} from './components/hero.component'

//This will instantiates our components

bootstrap(NavComponent);
bootstrap(HelloWorldComponent);
bootstrap(HeroComponent);
