"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NezumiBoneReader extends UnimplementedCard {
  constructor (game) {
    super(game, "Nezumi Bone-Reader", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NezumiBoneReader;
