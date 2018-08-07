"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ServoSchematic extends UnimplementedCard {
  constructor (game) {
    super(game, "Servo Schematic", "Aether Revolt", "AER");
  }
}

module.exports = ServoSchematic;
