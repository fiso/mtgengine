"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeroofLeinaTower extends Card {
  constructor(game) {
    super(game, "Hero of Leina Tower", "Born of the Gods", "BNG");
  }
}

module.exports = HeroofLeinaTower;
