"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrashforTreasure extends Card {
  constructor(game) {
    super(game, "Trash for Treasure", "Mirrodin", "MRD");
  }
}

module.exports = TrashforTreasure;
