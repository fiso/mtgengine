"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuneclawBear extends UnimplementedCard {
  constructor (game) {
    super(game, "Runeclaw Bear", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RuneclawBear;
