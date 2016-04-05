"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OreskosSunGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Oreskos Sun Guide", "Born of the Gods", "BNG");
  }
}

module.exports = OreskosSunGuide;
