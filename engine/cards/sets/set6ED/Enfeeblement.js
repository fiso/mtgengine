"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Enfeeblement extends Card {
  constructor(game) {
    super(game, "Enfeeblement", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Enfeeblement;
