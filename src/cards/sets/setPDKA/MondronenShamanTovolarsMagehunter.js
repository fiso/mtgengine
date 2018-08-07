"use strict";
const Constants = require ("../../../Constants");
const MondronenShamanTovolarsMagehunterBase = require("../setDKA/MondronenShamanTovolarsMagehunter");

class MondronenShamanTovolarsMagehunter extends MondronenShamanTovolarsMagehunterBase {
  constructor (game) {
    super(game, "Mondronen Shaman // Tovolar's Magehunter", "Dark Ascension Promos", "PDKA");
  }
}

module.exports = MondronenShamanTovolarsMagehunter;
