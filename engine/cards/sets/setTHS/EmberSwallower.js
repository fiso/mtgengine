"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmberSwallowerBase = require("../setpPRE/EmberSwallower.js");

class EmberSwallower extends EmberSwallowerBase {
  constructor(game) {
    super(game, "Ember Swallower", "Theros", "THS");
  }
}

module.exports = EmberSwallower;
