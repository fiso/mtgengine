"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HundredTalonKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Hundred-Talon Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HundredTalonKami;
