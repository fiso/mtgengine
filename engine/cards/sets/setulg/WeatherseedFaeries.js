"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeatherseedFaeries extends Card {
  constructor(game) {
    super(game, "Weatherseed Faeries", "Urza's Legacy", "ULG");
  }
}

module.exports = WeatherseedFaeries;
