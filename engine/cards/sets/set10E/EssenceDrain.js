"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EssenceDrainBase = require("../setDST/EssenceDrain.js");

class EssenceDrain extends EssenceDrainBase {
  constructor(game) {
    super(game, "Essence Drain", "Tenth Edition", "10E");
  }
}

module.exports = EssenceDrain;
