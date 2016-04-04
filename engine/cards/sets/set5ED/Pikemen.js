"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pikemen extends Card {
  constructor(game) {
    super(game, "Pikemen", "Fifth Edition", "5ED");
  }
}

module.exports = Pikemen;
