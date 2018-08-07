"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Proposal extends UnimplementedCard {
  constructor (game) {
    super(game, "Proposal", "Celebration Cards", "PCEL");
  }
}

module.exports = Proposal;
