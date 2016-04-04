"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EssenceDrainBase = require("../setDST/EssenceDrain.js");

class EssenceDrain extends EssenceDrainBase {
  constructor(game) {
    super(game, "Essence Drain", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = EssenceDrain;
