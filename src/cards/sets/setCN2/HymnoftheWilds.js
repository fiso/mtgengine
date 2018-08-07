"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HymnoftheWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Hymn of the Wilds", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HymnoftheWilds;
