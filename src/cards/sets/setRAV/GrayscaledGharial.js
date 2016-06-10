"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrayscaledGharial extends UnimplementedCard {
  constructor (game) {
    super(game, "Grayscaled Gharial", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GrayscaledGharial;
