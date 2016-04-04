"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneSpirit extends Card {
  constructor(game) {
    super(game, "Stone Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = StoneSpirit;
