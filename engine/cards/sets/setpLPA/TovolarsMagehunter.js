"use strict";
const Constants = require ("../../../Constants");
const TovolarsMagehunterBase = require("../setDKA/TovolarsMagehunter");

class TovolarsMagehunter extends TovolarsMagehunterBase {
  constructor(game) {
    super(game, "Tovolar's Magehunter", "Launch Parties", "pLPA");
  }
}

module.exports = TovolarsMagehunter;
