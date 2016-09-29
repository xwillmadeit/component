(function(window) {

	//strategy pattern
	var validatorRule = {
		NotEmpty: function (value, errMsg) {
			if(value == '') {
				return errMsg;
			}
		},

		MinLength: function (value, length, errMsg) {
			if(value.length < length) {
				return errMsg;
			}
		}
	}

	function Validator() {
		this.cache = [];
	}

	Validator.prototype.add = function (dom, rules) {
		var _this = this;
		for(var i = 0; i < rules.length; i++){
			(function(i) {
				var ruleArr = rules[i].rule.split(':'),
					rule = ruleArr.shift();
				ruleArr.unshift(dom.value);
				ruleArr.push(rules[i].msg);

				_this.cache.push(function() {
					return validatorRule[rule].apply(dom, ruleArr);
				});
			})(i);
		}
	}	

	Validator.prototype.start = function () {
	 	for (var i = 0;i<this.cache.length;i++){
			var msg = this.cache[i]();
			if(msg) {
				return msg;
			}
		}
	}	

	window.Validator = Validator;

})(window);