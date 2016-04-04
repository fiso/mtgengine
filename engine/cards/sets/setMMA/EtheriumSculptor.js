"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EtheriumSculptor extends Card {
  constructor(game) {
    super(game, "Etherium Sculptor", "Modern Masters", "MMA");
  }
}

module.exports = EtheriumSculptor;
