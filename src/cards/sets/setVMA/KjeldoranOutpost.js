"use strict";
const Constants = require ("../../../Constants");
const KjeldoranOutpostBase = require("../setALL/KjeldoranOutpost");

class KjeldoranOutpost extends KjeldoranOutpostBase {
  constructor(game) {
    super(game, "Kjeldoran Outpost", "Vintage Masters", "VMA");
  }
}

module.exports = KjeldoranOutpost;
