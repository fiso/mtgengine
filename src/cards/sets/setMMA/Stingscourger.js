"use strict";
const Constants = require ("../../../Constants");
const StingscourgerBase = require("../setEMA/Stingscourger");

class Stingscourger extends StingscourgerBase {
  constructor (game) {
    super(game, "Stingscourger", "Modern Masters", "MMA");
  }
}

module.exports = Stingscourger;
