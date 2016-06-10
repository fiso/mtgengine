"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindblaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindblaze", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Mindblaze;
