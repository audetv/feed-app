namespace $.$$ {

	export class $audetv_feed_app extends $.$audetv_feed_app {
		
		pages() {
			const question = this.question_cur_id()
			return [
				this.Menu(),
				// ...question ? [ this.Details( question ) ] : [],
			]
		}

		// ID записи, указан в урле, например: test.html#!question=79079489
		question_cur_id() {
			return Number( $mol_state_arg.value( 'question' ) )
		}

	}
}
