"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pacifism extends UnimplementedCard {
  constructor (game) {
    super(game, "Pacifism", "Battlebond", "BBD");
  }
}

module.exports = Pacifism;
