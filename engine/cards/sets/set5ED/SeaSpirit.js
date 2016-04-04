"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaSpirit extends Card {
  constructor(game) {
    super(game, "Sea Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = SeaSpirit;
