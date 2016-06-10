"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pacifism extends UnimplementedCard {
  constructor (game) {
    super(game, "Pacifism", "Anthologies", "ATH");
  }
}

module.exports = Pacifism;
