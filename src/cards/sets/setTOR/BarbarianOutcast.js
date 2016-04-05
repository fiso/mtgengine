"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianOutcast extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbarian Outcast", "Torment", "TOR");
  }
}

module.exports = BarbarianOutcast;
