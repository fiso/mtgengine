"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RabidWombat extends Card {
  constructor(game) {
    super(game, "Rabid Wombat", "Chronicles", "CHR");
  }
}

module.exports = RabidWombat;
