"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hankyu extends UnimplementedCard {
  constructor (game) {
    super(game, "Hankyu", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Hankyu;
