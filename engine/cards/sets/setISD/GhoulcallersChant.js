"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhoulcallersChant extends Card {
  constructor(game) {
    super(game, "Ghoulcaller's Chant", "Innistrad", "ISD");
  }
}

module.exports = GhoulcallersChant;
