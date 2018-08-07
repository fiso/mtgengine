"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerfistGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammerfist Giant", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = HammerfistGiant;
