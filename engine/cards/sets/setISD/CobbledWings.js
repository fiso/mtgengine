"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CobbledWingsBase = require("../setDDQ/CobbledWings.js");

class CobbledWings extends CobbledWingsBase {
  constructor(game) {
    super(game, "Cobbled Wings", "Innistrad", "ISD");
  }
}

module.exports = CobbledWings;
