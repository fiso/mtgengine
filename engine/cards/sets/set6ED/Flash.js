"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flash extends Card {
  constructor(game) {
    super(game, "Flash", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Flash;
