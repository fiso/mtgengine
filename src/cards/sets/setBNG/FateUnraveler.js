"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FateUnraveler extends UnimplementedCard {
  constructor (game) {
    super(game, "Fate Unraveler", "Born of the Gods", "BNG");
  }
}

module.exports = FateUnraveler;
