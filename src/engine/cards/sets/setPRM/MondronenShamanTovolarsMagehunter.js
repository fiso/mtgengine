"use strict";
const Constants = require ("../../../Constants");
const MondronenShamanTovolarsMagehunterBase = require("../setDKA/MondronenShamanTovolarsMagehunter");

class MondronenShamanTovolarsMagehunter extends MondronenShamanTovolarsMagehunterBase {
  constructor (game) {
    super(game, "Mondronen Shaman // Tovolar's Magehunter", "Magic Online Promos", "PRM");
  }
}

module.exports = MondronenShamanTovolarsMagehunter;
