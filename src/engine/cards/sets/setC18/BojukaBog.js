"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BojukaBog extends UnimplementedCard {
  constructor (game) {
    super(game, "Bojuka Bog", "Commander 2018", "C18");
  }
}

module.exports = BojukaBog;
