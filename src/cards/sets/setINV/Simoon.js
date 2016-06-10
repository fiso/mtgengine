"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Simoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Simoon", "Invasion", "INV");
  }
}

module.exports = Simoon;
