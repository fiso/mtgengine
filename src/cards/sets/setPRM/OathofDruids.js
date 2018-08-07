"use strict";
const Constants = require ("../../../Constants");
const OathofDruidsBase = require("../setC16/OathofDruids");

class OathofDruids extends OathofDruidsBase {
  constructor (game) {
    super(game, "Oath of Druids", "Magic Online Promos", "PRM");
  }
}

module.exports = OathofDruids;
