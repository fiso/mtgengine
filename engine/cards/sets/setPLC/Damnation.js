"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DamnationBase = require("../setpMPR/Damnation.js");

class Damnation extends DamnationBase {
  constructor(game) {
    super(game, "Damnation", "Planar Chaos", "PLC");
  }
}

module.exports = Damnation;
