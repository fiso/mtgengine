"use strict";
const Constants = require ("../../../Constants");
const OathofDruidsBase = require("../setEXO/OathofDruids");

class OathofDruids extends OathofDruidsBase {
  constructor(game) {
    super(game, "Oath of Druids", "Vintage Masters", "VMA");
  }
}

module.exports = OathofDruids;
