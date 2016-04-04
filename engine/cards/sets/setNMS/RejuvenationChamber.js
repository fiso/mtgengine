"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RejuvenationChamber extends UnimplementedCard {
  constructor(game) {
    super(game, "Rejuvenation Chamber", "Nemesis", "NMS");
  }
}

module.exports = RejuvenationChamber;
