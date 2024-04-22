import AccordionEditing from './accordionediting';
import AccordionUi from './accordionui';
import { Plugin } from 'ckeditor5/src/core';

export default class AccordionBox extends Plugin {
	static get requires() {
		return [ AccordionUi, AccordionEditing ];
	}
}
