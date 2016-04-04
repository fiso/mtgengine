"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepwoodGhoulBase = require("../set8ED/DeepwoodGhoul.js");

class DeepwoodGhoul extends DeepwoodGhoulBase {
  constructor(game) {
    super(game, "Deepwood Ghoul", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeepwoodGhoul;
