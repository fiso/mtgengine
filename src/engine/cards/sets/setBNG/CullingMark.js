"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CullingMark extends UnimplementedCard {
  constructor (game) {
    super(game, "Culling Mark", "Born of the Gods", "BNG");
  }
}

module.exports = CullingMark;
