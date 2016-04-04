"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LinSivviDefiantHero extends Card {
  constructor(game) {
    super(game, "Lin Sivvi, Defiant Hero", "Nemesis", "NMS");
  }
}

module.exports = LinSivviDefiantHero;
