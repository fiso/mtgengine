"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeistyStegosaurus extends UnimplementedCard {
  constructor (game) {
    super(game, "Feisty Stegosaurus", "Unstable", "UST");
  }
}

module.exports = FeistyStegosaurus;
