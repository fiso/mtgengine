"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Derelor extends Card {
  constructor(game) {
    super(game, "Derelor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Derelor;
