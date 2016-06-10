"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JushiApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Jushi Apprentice", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JushiApprentice;
