"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KagemarosClutch extends UnimplementedCard {
  constructor (game) {
    super(game, "Kagemaro's Clutch", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KagemarosClutch;
