"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionThrash extends Card {
  constructor(game) {
    super(game, "Carrion Thrash", "Shards of Alara", "ALA");
  }
}

module.exports = CarrionThrash;
