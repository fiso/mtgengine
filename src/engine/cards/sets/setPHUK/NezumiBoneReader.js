"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NezumiBoneReader extends UnimplementedCard {
  constructor (game) {
    super(game, "Nezumi Bone-Reader", "Hachette UK", "PHUK");
  }
}

module.exports = NezumiBoneReader;
