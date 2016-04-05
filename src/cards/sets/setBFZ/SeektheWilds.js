"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeektheWilds extends UnimplementedCard {
  constructor(game) {
    super(game, "Seek the Wilds", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SeektheWilds;
