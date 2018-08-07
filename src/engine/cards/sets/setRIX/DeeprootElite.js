"use strict";
const Constants = require ("../../../Constants");
const DeeprootEliteBase = require("../setPRIX/DeeprootElite");

class DeeprootElite extends DeeprootEliteBase {
  constructor (game) {
    super(game, "Deeproot Elite", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DeeprootElite;
