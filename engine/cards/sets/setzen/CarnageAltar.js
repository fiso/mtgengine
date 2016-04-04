"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarnageAltarBase = require("../setC13/CarnageAltar.js");

class CarnageAltar extends CarnageAltarBase {
  constructor(game) {
    super(game, "Carnage Altar", "Zendikar", "ZEN");
  }
}

module.exports = CarnageAltar;
