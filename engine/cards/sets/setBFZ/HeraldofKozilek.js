"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofKozilek extends Card {
  constructor(game) {
    super(game, "Herald of Kozilek", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HeraldofKozilek;
