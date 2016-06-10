"use strict";
const Constants = require ("../../../Constants");
const DeepwoodGhoulBase = require("../set8ED/DeepwoodGhoul");

class DeepwoodGhoul extends DeepwoodGhoulBase {
  constructor (game) {
    super(game, "Deepwood Ghoul", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeepwoodGhoul;
