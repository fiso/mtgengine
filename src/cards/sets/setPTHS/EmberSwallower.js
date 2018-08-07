"use strict";
const Constants = require ("../../../Constants");
const EmberSwallowerBase = require("../setTHS/EmberSwallower");

class EmberSwallower extends EmberSwallowerBase {
  constructor (game) {
    super(game, "Ember Swallower", "Theros Promos", "PTHS");
  }
}

module.exports = EmberSwallower;
