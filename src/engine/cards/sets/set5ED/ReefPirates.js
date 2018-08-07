"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReefPirates extends UnimplementedCard {
  constructor (game) {
    super(game, "Reef Pirates", "Fifth Edition", "5ED");
  }
}

module.exports = ReefPirates;
