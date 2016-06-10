"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Giant", "Collector's Edition", "CED");
  }
}

module.exports = StoneGiant;
