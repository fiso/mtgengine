"use strict";
const Constants = require ("../../../Constants");
const EmberSwallowerBase = require("../setpPRE/EmberSwallower");

class EmberSwallower extends EmberSwallowerBase {
  constructor (game) {
    super(game, "Ember Swallower", "Theros", "THS");
  }
}

module.exports = EmberSwallower;
