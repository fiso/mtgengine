"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirranCrusaderBase = require("../setpMEI/MirranCrusader.js");

class MirranCrusader extends MirranCrusaderBase {
  constructor(game) {
    super(game, "Mirran Crusader", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MirranCrusader;
