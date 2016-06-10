"use strict";
const Constants = require ("../../../Constants");
const CarnageAltarBase = require("../setC13/CarnageAltar");

class CarnageAltar extends CarnageAltarBase {
  constructor (game) {
    super(game, "Carnage Altar", "Zendikar", "ZEN");
  }
}

module.exports = CarnageAltar;
