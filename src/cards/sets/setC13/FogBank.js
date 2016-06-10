"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FogBank extends UnimplementedCard {
  constructor (game) {
    super(game, "Fog Bank", "Commander 2013 Edition", "C13");
  }
}

module.exports = FogBank;
