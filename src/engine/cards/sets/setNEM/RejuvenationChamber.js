"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RejuvenationChamber extends UnimplementedCard {
  constructor (game) {
    super(game, "Rejuvenation Chamber", "Nemesis", "NEM");
  }
}

module.exports = RejuvenationChamber;
