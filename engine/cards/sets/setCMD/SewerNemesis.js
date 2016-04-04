"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SewerNemesis extends UnimplementedCard {
  constructor(game) {
    super(game, "Sewer Nemesis", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SewerNemesis;
