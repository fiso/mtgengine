"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootwaterHunterBase = require("../setTMP/RootwaterHunter.js");

class RootwaterHunter extends RootwaterHunterBase {
  constructor(game) {
    super(game, "Rootwater Hunter", "Tempest Remastered", "TPR");
  }
}

module.exports = RootwaterHunter;
