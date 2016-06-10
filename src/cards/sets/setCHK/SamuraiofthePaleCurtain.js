"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamuraiofthePaleCurtain extends UnimplementedCard {
  constructor (game) {
    super(game, "Samurai of the Pale Curtain", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SamuraiofthePaleCurtain;
