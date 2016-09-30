(function(window) {

	function Modal(options) {

		var defaults = {
			content: 'do you want to close?',
			closeBtn: false,
			overlay: false,
			className: 'fade-and-drop'
		}
		
		this.modal = null;
		this.overlay = null;
		this.closeBtn = null;

		if(arguments[0] && typeof arguments[0] == 'object'){
			this.options = mergeOptions(defaults, arguments[0]);
		}
	}

	Modal.prototype.open = function() {
		createModal.call(this);
		bindCloseEvent.call(this);

		//key to the animation
		window.getComputedStyle(this.modal).height;

		this.modal.classList.add('modal-open');
	}

	Modal.prototype.close = function() {
		//close modal
		this.modal.parentNode.removeChild(this.modal);
		//close overlay
		this.overlay.parentNode.removeChild(this.overlay);
	}

	function bindCloseEvent() {
		if(this.options.overlay) {
			this.overlay.addEventListener('click', this.close.bind(this));
		}
		
		if(this.closeBtn) {
			this.closeBtn.addEventListener('click', this.close.bind(this));
		}
	}

	function createModal() {
		var tempNode = document.createDocumentFragment();
		//modal
		this.modal = document.createElement('div');
		this.modal.classList.add('xwill-modal', this.options.className);

		//closeBtn
		if(this.options.closeBtn) {
			this.closeBtn = document.createElement('button');
			this.closeBtn.classList.add('close-btn');
			this.closeBtn.innerHTML = '&times;';
			this.modal.appendChild(this.closeBtn);
		}

		//content
		var content = document.createElement('div');
		content.innerHTML = this.options.content;
		this.modal.appendChild(content);

		//overlay
		this.overlay = document.createElement('div');
		this.overlay.classList.add('overlay-in');

		tempNode.appendChild(this.modal);
		tempNode.appendChild(this.overlay);

		document.body.appendChild(tempNode);
	}

	function mergeOptions(source, prototies) {
		for(var i in prototies) {
			source[i] = prototies[i];
		}
		return source;
	}

	window.Modal = Modal;
})(window);