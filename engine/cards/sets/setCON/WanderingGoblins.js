"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingGoblins extends Card {
  constructor(game) {
    super(game, "Wandering Goblins", "Conflux", "CON");
  }
}

module.exports = WanderingGoblins;
