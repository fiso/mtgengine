"use strict";
const Constants = require ("../../../Constants");
const StingscourgerBase = require("../setEMA/Stingscourger");

class Stingscourger extends StingscourgerBase {
  constructor (game) {
    super(game, "Stingscourger", "Planar Chaos", "PLC");
  }
}

module.exports = Stingscourger;
