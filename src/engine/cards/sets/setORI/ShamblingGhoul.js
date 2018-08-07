"use strict";
const Constants = require ("../../../Constants");
const ShamblingGhoulBase = require("../setBBD/ShamblingGhoul");

class ShamblingGhoul extends ShamblingGhoulBase {
  constructor (game) {
    super(game, "Shambling Ghoul", "Magic Origins", "ORI");
  }
}

module.exports = ShamblingGhoul;
