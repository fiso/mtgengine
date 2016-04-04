"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MyrSireBase = require("../setC14/MyrSire.js");

class MyrSire extends MyrSireBase {
  constructor(game) {
    super(game, "Myr Sire", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MyrSire;
