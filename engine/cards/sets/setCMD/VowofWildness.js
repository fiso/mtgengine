"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VowofWildness extends UnimplementedCard {
  constructor(game) {
    super(game, "Vow of Wildness", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofWildness;
