"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirranCrusaderBase = require("../setpMEI/MirranCrusader.js");

class MirranCrusader extends MirranCrusaderBase {
  constructor(game) {
    super(game, "Mirran Crusader", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MirranCrusader;
