"use strict";
const Constants = require ("../../../Constants");
const OathofDruidsBase = require("../setEXO/OathofDruids");

class OathofDruids extends OathofDruidsBase {
  constructor (game) {
    super(game, "Oath of Druids", "Tempest Remastered", "TPR");
  }
}

module.exports = OathofDruids;
