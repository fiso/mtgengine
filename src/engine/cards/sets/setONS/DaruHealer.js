"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Daru Healer", "Onslaught", "ONS");
  }
}

module.exports = DaruHealer;
