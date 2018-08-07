"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UbaMask extends UnimplementedCard {
  constructor (game) {
    super(game, "Uba Mask", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UbaMask;
