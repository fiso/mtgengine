"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Pain Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PainKami;
