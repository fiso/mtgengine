"use strict";
const Constants = require ("../../../Constants");
const MirranCrusaderBase = require("../setMM2/MirranCrusader");

class MirranCrusader extends MirranCrusaderBase {
  constructor (game) {
    super(game, "Mirran Crusader", "Magic Online Promos", "PRM");
  }
}

module.exports = MirranCrusader;
