"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HearthcageGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Hearthcage Giant", "Lorwyn", "LRW");
  }
}

module.exports = HearthcageGiant;
