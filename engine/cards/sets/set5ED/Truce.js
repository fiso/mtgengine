"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Truce extends Card {
  constructor(game) {
    super(game, "Truce", "Fifth Edition", "5ED");
  }
}

module.exports = Truce;
