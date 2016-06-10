"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulofMagma extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul of Magma", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoulofMagma;
