"use strict";
const Constants = require ("../../../Constants");
const ThroughtheBreachBase = require("../setMP2/ThroughtheBreach");

class ThroughtheBreach extends ThroughtheBreachBase {
  constructor (game) {
    super(game, "Through the Breach", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ThroughtheBreach;
