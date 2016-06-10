"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeatherseedFaeries extends UnimplementedCard {
  constructor (game) {
    super(game, "Weatherseed Faeries", "Urza's Legacy", "ULG");
  }
}

module.exports = WeatherseedFaeries;
