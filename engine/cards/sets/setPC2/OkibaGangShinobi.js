"use strict";
const Constants = require ("../../../Constants");
const OkibaGangShinobiBase = require("../setBOK/OkibaGangShinobi");

class OkibaGangShinobi extends OkibaGangShinobiBase {
  constructor(game) {
    super(game, "Okiba-Gang Shinobi", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = OkibaGangShinobi;
