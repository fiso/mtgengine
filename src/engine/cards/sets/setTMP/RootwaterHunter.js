"use strict";
const Constants = require ("../../../Constants");
const RootwaterHunterBase = require("../setDDT/RootwaterHunter");

class RootwaterHunter extends RootwaterHunterBase {
  constructor (game) {
    super(game, "Rootwater Hunter", "Tempest", "TMP");
  }
}

module.exports = RootwaterHunter;
