"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrawnTogether extends UnimplementedCard {
  constructor (game) {
    super(game, "Drawn Together", "Unhinged", "UNH");
  }
}

module.exports = DrawnTogether;
