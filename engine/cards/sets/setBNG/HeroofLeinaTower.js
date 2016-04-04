"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroofLeinaTower extends UnimplementedCard {
  constructor(game) {
    super(game, "Hero of Leina Tower", "Born of the Gods", "BNG");
  }
}

module.exports = HeroofLeinaTower;
