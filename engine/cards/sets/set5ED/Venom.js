"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Venom extends Card {
  constructor(game) {
    super(game, "Venom", "Fifth Edition", "5ED");
  }
}

module.exports = Venom;
