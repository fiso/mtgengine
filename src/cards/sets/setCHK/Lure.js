"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lure extends UnimplementedCard {
  constructor (game) {
    super(game, "Lure", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Lure;
