"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrullRetainer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrull Retainer", "Masters Edition", "MED");
  }
}

module.exports = ThrullRetainer;
