"use strict";
const Constants = require ("../../../Constants");
const GarruksPackleaderBase = require("../setM15/GarruksPackleader");

class GarruksPackleader extends GarruksPackleaderBase {
  constructor (game) {
    super(game, "Garruk's Packleader", "Magic 2011", "M11");
  }
}

module.exports = GarruksPackleader;
