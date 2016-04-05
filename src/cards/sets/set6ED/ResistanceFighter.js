"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResistanceFighter extends UnimplementedCard {
  constructor(game) {
    super(game, "Resistance Fighter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ResistanceFighter;
