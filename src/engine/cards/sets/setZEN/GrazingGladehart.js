"use strict";
const Constants = require ("../../../Constants");
const GrazingGladehartBase = require("../setDDP/GrazingGladehart");

class GrazingGladehart extends GrazingGladehartBase {
  constructor (game) {
    super(game, "Grazing Gladehart", "Zendikar", "ZEN");
  }
}

module.exports = GrazingGladehart;
