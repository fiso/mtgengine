"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchTogether extends UnimplementedCard {
  constructor(game) {
    super(game, "Stitch Together", "Judgment", "JUD");
  }
}

module.exports = StitchTogether;
