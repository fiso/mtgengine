"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flight extends Card {
  constructor(game) {
    super(game, "Flight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Flight;
