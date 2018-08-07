"use strict";
const Constants = require ("../../../Constants");
const EmberSwallowerBase = require("../setTHS/EmberSwallower");

class EmberSwallower extends EmberSwallowerBase {
  constructor (game) {
    super(game, "Ember Swallower", "Magic Online Promos", "PRM");
  }
}

module.exports = EmberSwallower;
