"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Serenity extends Card {
  constructor(game) {
    super(game, "Serenity", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Serenity;
