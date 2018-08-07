"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brainbite extends UnimplementedCard {
  constructor (game) {
    super(game, "Brainbite", "Alara Reborn", "ARB");
  }
}

module.exports = Brainbite;
