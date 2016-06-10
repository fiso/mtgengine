"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntheWebofWar extends UnimplementedCard {
  constructor (game) {
    super(game, "In the Web of War", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = IntheWebofWar;
