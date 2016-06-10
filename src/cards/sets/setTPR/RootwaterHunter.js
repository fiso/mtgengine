"use strict";
const Constants = require ("../../../Constants");
const RootwaterHunterBase = require("../setTMP/RootwaterHunter");

class RootwaterHunter extends RootwaterHunterBase {
  constructor (game) {
    super(game, "Rootwater Hunter", "Tempest Remastered", "TPR");
  }
}

module.exports = RootwaterHunter;
