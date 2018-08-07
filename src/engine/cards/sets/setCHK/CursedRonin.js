"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedRonin extends UnimplementedCard {
  constructor (game) {
    super(game, "Cursed Ronin", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CursedRonin;
