"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvenRiders extends Card {
  constructor(game) {
    super(game, "Elven Riders", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElvenRiders;
