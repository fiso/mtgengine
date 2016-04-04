"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NezumiGraverobber extends UnimplementedCard {
  constructor(game) {
    super(game, "Nezumi Graverobber", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NezumiGraverobber;
