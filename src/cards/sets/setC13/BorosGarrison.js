"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosGarrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Garrison", "Commander 2013 Edition", "C13");
  }
}

module.exports = BorosGarrison;
