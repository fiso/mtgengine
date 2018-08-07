"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchTogether extends UnimplementedCard {
  constructor (game) {
    super(game, "Stitch Together", "Commander 2018", "C18");
  }
}

module.exports = StitchTogether;
