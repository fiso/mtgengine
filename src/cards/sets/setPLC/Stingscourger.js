"use strict";
const Constants = require ("../../../Constants");
const StingscourgerBase = require("../setMMA/Stingscourger");

class Stingscourger extends StingscourgerBase {
  constructor(game) {
    super(game, "Stingscourger", "Planar Chaos", "PLC");
  }
}

module.exports = Stingscourger;
