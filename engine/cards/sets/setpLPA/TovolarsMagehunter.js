"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TovolarsMagehunterBase = require("../setDKA/TovolarsMagehunter.js");

class TovolarsMagehunter extends TovolarsMagehunterBase {
  constructor(game) {
    super(game, "Tovolar's Magehunter", "Launch Parties", "pLPA");
  }
}

module.exports = TovolarsMagehunter;
