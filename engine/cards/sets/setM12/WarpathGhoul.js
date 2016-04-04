"use strict";
const Constants = require ("../../../Constants");
const WarpathGhoulBase = require("../setM10/WarpathGhoul");

class WarpathGhoul extends WarpathGhoulBase {
  constructor(game) {
    super(game, "Warpath Ghoul", "Magic 2012", "M12");
  }
}

module.exports = WarpathGhoul;
