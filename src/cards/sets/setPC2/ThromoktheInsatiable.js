"use strict";
const Constants = require ("../../../Constants");
const ThromoktheInsatiableBase = require("../setPCA/ThromoktheInsatiable");

class ThromoktheInsatiable extends ThromoktheInsatiableBase {
  constructor (game) {
    super(game, "Thromok the Insatiable", "Planechase 2012", "PC2");
  }
}

module.exports = ThromoktheInsatiable;
