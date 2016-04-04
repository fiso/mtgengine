"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EscapedNull extends Card {
  constructor(game) {
    super(game, "Escaped Null", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EscapedNull;
