"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlatedGeopedeBase = require("../setDDI/PlatedGeopede.js");

class PlatedGeopede extends PlatedGeopedeBase {
  constructor(game) {
    super(game, "Plated Geopede", "Zendikar", "ZEN");
  }
}

module.exports = PlatedGeopede;
