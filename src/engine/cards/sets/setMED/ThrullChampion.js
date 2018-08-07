"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrullChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrull Champion", "Masters Edition", "MED");
  }
}

module.exports = ThrullChampion;
