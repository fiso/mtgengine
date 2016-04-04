"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NovaPentacle extends Card {
  constructor(game) {
    super(game, "Nova Pentacle", "Legends", "LEG");
  }
}

module.exports = NovaPentacle;
