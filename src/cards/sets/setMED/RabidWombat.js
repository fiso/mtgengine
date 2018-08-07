"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RabidWombat extends UnimplementedCard {
  constructor (game) {
    super(game, "Rabid Wombat", "Masters Edition", "MED");
  }
}

module.exports = RabidWombat;
