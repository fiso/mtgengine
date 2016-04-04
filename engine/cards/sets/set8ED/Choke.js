"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Choke extends Card {
  constructor(game) {
    super(game, "Choke", "Eighth Edition", "8ED");
  }
}

module.exports = Choke;
