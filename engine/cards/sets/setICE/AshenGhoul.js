"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshenGhoulBase = require("../setCST/AshenGhoul.js");

class AshenGhoul extends AshenGhoulBase {
  constructor(game) {
    super(game, "Ashen Ghoul", "Ice Age", "ICE");
  }
}

module.exports = AshenGhoul;
