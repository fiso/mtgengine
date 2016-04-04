"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BestialMenaceBase = require("../setCMD/BestialMenace.js");

class BestialMenace extends BestialMenaceBase {
  constructor(game) {
    super(game, "Bestial Menace", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BestialMenace;
