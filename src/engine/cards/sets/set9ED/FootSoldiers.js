"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FootSoldiers extends UnimplementedCard {
  constructor (game) {
    super(game, "Foot Soldiers", "Ninth Edition", "9ED");
  }
}

module.exports = FootSoldiers;
