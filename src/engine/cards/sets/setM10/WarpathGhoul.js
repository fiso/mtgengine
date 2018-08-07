"use strict";
const Constants = require ("../../../Constants");
const WarpathGhoulBase = require("../setM12/WarpathGhoul");

class WarpathGhoul extends WarpathGhoulBase {
  constructor (game) {
    super(game, "Warpath Ghoul", "Magic 2010", "M10");
  }
}

module.exports = WarpathGhoul;
