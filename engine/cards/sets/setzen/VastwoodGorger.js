"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VastwoodGorgerBase = require("../setM12/VastwoodGorger.js");

class VastwoodGorger extends VastwoodGorgerBase {
  constructor(game) {
    super(game, "Vastwood Gorger", "Zendikar", "ZEN");
  }
}

module.exports = VastwoodGorger;
