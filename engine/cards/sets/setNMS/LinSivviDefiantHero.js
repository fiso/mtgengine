"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LinSivviDefiantHero extends UnimplementedCard {
  constructor(game) {
    super(game, "Lin Sivvi, Defiant Hero", "Nemesis", "NMS");
  }
}

module.exports = LinSivviDefiantHero;
