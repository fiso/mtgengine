"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalloftheHammer extends UnimplementedCard {
  constructor(game) {
    super(game, "Fall of the Hammer", "Born of the Gods", "BNG");
  }
}

module.exports = FalloftheHammer;
