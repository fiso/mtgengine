"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mobilize extends UnimplementedCard {
  constructor (game) {
    super(game, "Mobilize", "Portal", "POR");
  }
}

module.exports = Mobilize;
