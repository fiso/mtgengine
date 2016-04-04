"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarpathGhoulBase = require("../setM10/WarpathGhoul.js");

class WarpathGhoul extends WarpathGhoulBase {
  constructor(game) {
    super(game, "Warpath Ghoul", "Magic 2012", "M12");
  }
}

module.exports = WarpathGhoul;
