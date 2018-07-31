function Navigation (args) {
	const that = this;

	args = args || {};

	this.parent = args.parent || null;

	/*
	@ Open
	*/
	this.open = function (_controller, _controllerArguments, events) {
		let controller
      , controllerView
			;

		if (!_.isString(_controller)) {
			controller = _controller;
		} else {
			controller = Alloy.createController(_controller, _controllerArguments);
		}

		if (events) {
			_.each(events, function (value, key) {
				controller = controller.on('' + key + '', value);
			});
		}

		if (controller.getView) {
			controllerView = controller.getView();
		} else {
			controllerView = controller;
		}

		that.parent.openWindow(controllerView);

		return controller;
	};
}

// Calling this module function returns a new navigation instance
module.exports = function (args) {
	return new Navigation(args);
};
