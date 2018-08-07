"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranExplorer extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran Explorer", "Battlebond", "BBD");
  }
}

module.exports = VeteranExplorer;
