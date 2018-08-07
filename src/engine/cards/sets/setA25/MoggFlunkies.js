"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggFlunkies extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Flunkies", "Masters 25", "A25");
  }
}

module.exports = MoggFlunkies;
