"use strict";
const Constants = require ("../../../Constants");
const AshenGhoulBase = require("../setCST/AshenGhoul");

class AshenGhoul extends AshenGhoulBase {
  constructor(game) {
    super(game, "Ashen Ghoul", "Ice Age", "ICE");
  }
}

module.exports = AshenGhoul;
