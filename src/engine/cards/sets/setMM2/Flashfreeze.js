"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flashfreeze extends UnimplementedCard {
  constructor (game) {
    super(game, "Flashfreeze", "Modern Masters 2015", "MM2");
  }
}

module.exports = Flashfreeze;
