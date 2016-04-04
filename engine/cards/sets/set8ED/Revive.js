"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Revive extends Card {
  constructor(game) {
    super(game, "Revive", "Eighth Edition", "8ED");
  }
}

module.exports = Revive;
