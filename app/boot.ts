//import the bootsrtap from angular
import {bootstrap}    from 'angular2/platform/browser'

// load our our components
import {NavComponent} from './nav.component'
import {HelloWorldComponent} from './hello-world'

//This will instantiates our components

bootstrap(NavComponent);
bootstrap(HelloWorldComponent);
