"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DissipateBase = require("../setDDJ/Dissipate.js");

class Dissipate extends DissipateBase {
  constructor(game) {
    super(game, "Dissipate", "Mirage", "MIR");
  }
}

module.exports = Dissipate;
