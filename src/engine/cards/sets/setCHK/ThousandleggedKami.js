"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThousandleggedKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Thousand-legged Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ThousandleggedKami;
