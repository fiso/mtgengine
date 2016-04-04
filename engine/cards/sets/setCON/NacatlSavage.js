"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NacatlSavage extends Card {
  constructor(game) {
    super(game, "Nacatl Savage", "Conflux", "CON");
  }
}

module.exports = NacatlSavage;
