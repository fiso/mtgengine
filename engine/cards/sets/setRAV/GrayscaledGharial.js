"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrayscaledGharial extends Card {
  constructor(game) {
    super(game, "Grayscaled Gharial", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GrayscaledGharial;
