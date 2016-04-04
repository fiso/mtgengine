"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmasaurBase = require("../setTMP/Magmasaur.js");

class Magmasaur extends MagmasaurBase {
  constructor(game) {
    super(game, "Magmasaur", "Tempest Remastered", "TPR");
  }
}

module.exports = Magmasaur;
