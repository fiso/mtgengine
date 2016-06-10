"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisceraSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Viscera Seer", "Commander 2013 Edition", "C13");
  }
}

module.exports = VisceraSeer;
