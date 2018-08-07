"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalContract extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Contract", "Hachette UK", "PHUK");
  }
}

module.exports = InfernalContract;
