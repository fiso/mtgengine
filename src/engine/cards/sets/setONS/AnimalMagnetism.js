"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimalMagnetism extends UnimplementedCard {
  constructor (game) {
    super(game, "Animal Magnetism", "Onslaught", "ONS");
  }
}

module.exports = AnimalMagnetism;
