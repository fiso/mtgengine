"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Morale extends Card {
  constructor(game) {
    super(game, "Morale", "Fourth Edition", "4ED");
  }
}

module.exports = Morale;
