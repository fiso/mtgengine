"use strict";
const Constants = require ("../../../Constants");
const AshenGhoulBase = require("../setCST/AshenGhoul");

class AshenGhoul extends AshenGhoulBase {
  constructor (game) {
    super(game, "Ashen Ghoul", "Masters Edition II", "ME2");
  }
}

module.exports = AshenGhoul;
