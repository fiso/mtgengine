"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CentaurArcherBase = require("../setICE/CentaurArcher.js");

class CentaurArcher extends CentaurArcherBase {
  constructor(game) {
    super(game, "Centaur Archer", "Masters Edition", "MED");
  }
}

module.exports = CentaurArcher;
