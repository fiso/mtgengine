"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrashforTreasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Trash for Treasure", "Mirrodin", "MRD");
  }
}

module.exports = TrashforTreasure;
