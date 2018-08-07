"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhoxMeditant extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhox Meditant", "Conflux", "CON");
  }
}

module.exports = RhoxMeditant;
