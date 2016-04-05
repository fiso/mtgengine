"use strict";
const Constants = require ("../../../Constants");
const OppressionBase = require("../set7ED/Oppression");

class Oppression extends OppressionBase {
  constructor(game) {
    super(game, "Oppression", "Urza's Saga", "USG");
  }
}

module.exports = Oppression;
