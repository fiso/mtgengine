"use strict";
const Constants = require ("../../../Constants");
const OkibaGangShinobiBase = require("../setPCA/OkibaGangShinobi");

class OkibaGangShinobi extends OkibaGangShinobiBase {
  constructor (game) {
    super(game, "Okiba-Gang Shinobi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OkibaGangShinobi;
