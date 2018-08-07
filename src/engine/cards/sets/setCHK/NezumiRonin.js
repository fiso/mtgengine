"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NezumiRonin extends UnimplementedCard {
  constructor (game) {
    super(game, "Nezumi Ronin", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NezumiRonin;
