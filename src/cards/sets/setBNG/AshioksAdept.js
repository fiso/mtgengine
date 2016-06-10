"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshioksAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashiok's Adept", "Born of the Gods", "BNG");
  }
}

module.exports = AshioksAdept;
