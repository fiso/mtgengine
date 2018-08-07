"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AntQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Ant Queen", "Modern Masters 2015", "MM2");
  }
}

module.exports = AntQueen;
