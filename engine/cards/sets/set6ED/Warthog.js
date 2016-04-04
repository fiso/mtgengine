"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Warthog extends Card {
  constructor(game) {
    super(game, "Warthog", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Warthog;
