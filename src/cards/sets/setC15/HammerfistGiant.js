"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerfistGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammerfist Giant", "Commander 2015", "C15");
  }
}

module.exports = HammerfistGiant;
