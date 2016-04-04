"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefenderenVec extends UnimplementedCard {
  constructor(game) {
    super(game, "Defender en-Vec", "Nemesis", "NMS");
  }
}

module.exports = DefenderenVec;
