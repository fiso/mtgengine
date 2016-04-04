"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DissipateBase = require("../setDDJ/Dissipate.js");

class Dissipate extends DissipateBase {
  constructor(game) {
    super(game, "Dissipate", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Dissipate;
