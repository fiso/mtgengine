"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerofNazahn extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammer of Nazahn", "Commander 2017", "C17");
  }
}

module.exports = HammerofNazahn;
