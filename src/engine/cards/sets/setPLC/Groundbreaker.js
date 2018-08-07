"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Groundbreaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Groundbreaker", "Planar Chaos", "PLC");
  }
}

module.exports = Groundbreaker;
