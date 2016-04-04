"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneFlute extends Card {
  constructor(game) {
    super(game, "Bone Flute", "Masters Edition III", "ME3");
  }
}

module.exports = BoneFlute;
