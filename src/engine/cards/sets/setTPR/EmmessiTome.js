"use strict";
const Constants = require ("../../../Constants");
const EmmessiTomeBase = require("../setEMA/EmmessiTome");

class EmmessiTome extends EmmessiTomeBase {
  constructor (game) {
    super(game, "Emmessi Tome", "Tempest Remastered", "TPR");
  }
}

module.exports = EmmessiTome;
