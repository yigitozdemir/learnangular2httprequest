import {bootstrap}  from 'angular2/platform/browser';
import {RegisterPage} from './app/registerpage.ts';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(RegisterPage, [HTTP_PROVIDERS]);
