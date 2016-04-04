"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrazingGladehartBase = require("../setC13/GrazingGladehart.js");

class GrazingGladehart extends GrazingGladehartBase {
  constructor(game) {
    super(game, "Grazing Gladehart", "Zendikar", "ZEN");
  }
}

module.exports = GrazingGladehart;
