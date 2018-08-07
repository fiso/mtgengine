"use strict";
const Constants = require ("../../../Constants");
const VastwoodGorgerBase = require("../setORI/VastwoodGorger");

class VastwoodGorger extends VastwoodGorgerBase {
  constructor (game) {
    super(game, "Vastwood Gorger", "Magic 2012", "M12");
  }
}

module.exports = VastwoodGorger;
