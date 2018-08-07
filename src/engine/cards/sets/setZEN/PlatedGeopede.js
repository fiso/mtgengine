"use strict";
const Constants = require ("../../../Constants");
const PlatedGeopedeBase = require("../setDDI/PlatedGeopede");

class PlatedGeopede extends PlatedGeopedeBase {
  constructor (game) {
    super(game, "Plated Geopede", "Zendikar", "ZEN");
  }
}

module.exports = PlatedGeopede;
