"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeasingerBase = require("../setFEM/Seasinger.js");

class Seasinger extends SeasingerBase {
  constructor(game) {
    super(game, "Seasinger", "Masters Edition", "MED");
  }
}

module.exports = Seasinger;
