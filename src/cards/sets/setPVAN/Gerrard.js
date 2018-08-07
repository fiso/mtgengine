"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gerrard extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard", "Vanguard Series", "PVAN");
  }
}

module.exports = Gerrard;
