"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DropofHoney extends UnimplementedCard {
  constructor (game) {
    super(game, "Drop of Honey", "Arabian Nights", "ARN");
  }
}

module.exports = DropofHoney;
