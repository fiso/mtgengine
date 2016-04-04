"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OppressionBase = require("../set7ED/Oppression.js");

class Oppression extends OppressionBase {
  constructor(game) {
    super(game, "Oppression", "Urza's Saga", "USG");
  }
}

module.exports = Oppression;
