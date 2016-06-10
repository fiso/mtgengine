"use strict";
const Constants = require ("../../../Constants");
const VastwoodGorgerBase = require("../setM12/VastwoodGorger");

class VastwoodGorger extends VastwoodGorgerBase {
  constructor (game) {
    super(game, "Vastwood Gorger", "Magic 2013", "M13");
  }
}

module.exports = VastwoodGorger;
