"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vigilance extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigilance", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Vigilance;
