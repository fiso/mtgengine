"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamioftheHonoredDead extends Card {
  constructor(game) {
    super(game, "Kami of the Honored Dead", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KamioftheHonoredDead;
