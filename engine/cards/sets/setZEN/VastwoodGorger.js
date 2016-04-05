"use strict";
const Constants = require ("../../../Constants");
const VastwoodGorgerBase = require("../setM12/VastwoodGorger");

class VastwoodGorger extends VastwoodGorgerBase {
  constructor(game) {
    super(game, "Vastwood Gorger", "Zendikar", "ZEN");
  }
}

module.exports = VastwoodGorger;
