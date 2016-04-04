"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CityofTraitors extends Card {
  constructor(game) {
    super(game, "City of Traitors", "Exodus", "EXO");
  }
}

module.exports = CityofTraitors;
