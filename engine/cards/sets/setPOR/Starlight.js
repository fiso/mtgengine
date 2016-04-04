"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Starlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Starlight", "Portal", "POR");
  }
}

module.exports = Starlight;
