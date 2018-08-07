"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PusKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Pus Kami", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PusKami;
