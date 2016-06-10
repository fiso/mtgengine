"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Runesword extends UnimplementedCard {
  constructor (game) {
    super(game, "Runesword", "Chronicles", "CHR");
  }
}

module.exports = Runesword;
