"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dreamcatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreamcatcher", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Dreamcatcher;
