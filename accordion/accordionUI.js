import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';

import accordionIcon from '../theme/icons/accordion.svg';

export default class AccordionUI extends Plugin {
	init() {
		// eslint-disable-next-line no-undef
		console.log( 'AccordionUI#init() got called' );

		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'accordion', locale => {
			const command = editor.commands.get( 'insertAccordion' );
			const buttonView = new ButtonView( locale );

			buttonView.set( {
				label: t( 'Accordion' ),
				icon: accordionIcon,
				tooltip: true
			} );

			buttonView.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			this.listenTo( buttonView, 'execute', () => {
				editor.execute( 'insertAccordion' );
			} );

			return buttonView;
		} );
	}
}
