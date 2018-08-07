"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvatarofWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Avatar of Will", "Prophecy", "PCY");
  }
}

module.exports = AvatarofWill;
