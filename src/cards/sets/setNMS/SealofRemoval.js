"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofRemoval extends UnimplementedCard {
  constructor(game) {
    super(game, "Seal of Removal", "Nemesis", "NMS");
  }
}

module.exports = SealofRemoval;
