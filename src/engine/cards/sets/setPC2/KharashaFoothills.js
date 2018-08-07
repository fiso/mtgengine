"use strict";
const Constants = require ("../../../Constants");
const KharashaFoothillsBase = require("../setPCA/KharashaFoothills");

class KharashaFoothills extends KharashaFoothillsBase {
  constructor (game) {
    super(game, "Kharasha Foothills", "Planechase 2012", "PC2");
  }
}

module.exports = KharashaFoothills;
