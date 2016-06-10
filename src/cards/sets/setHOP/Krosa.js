"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Krosa extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosa", "Planechase", "HOP");
  }
}

module.exports = Krosa;
