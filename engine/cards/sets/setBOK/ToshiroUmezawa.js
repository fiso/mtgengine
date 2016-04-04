"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToshiroUmezawa extends UnimplementedCard {
  constructor(game) {
    super(game, "Toshiro Umezawa", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ToshiroUmezawa;
