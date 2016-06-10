"use strict";
const Constants = require ("../../../Constants");
const MirranCrusaderBase = require("../setpMEI/MirranCrusader");

class MirranCrusader extends MirranCrusaderBase {
  constructor (game) {
    super(game, "Mirran Crusader", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MirranCrusader;
