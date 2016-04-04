"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteSkirmisher extends UnimplementedCard {
  constructor(game) {
    super(game, "Elite Skirmisher", "Born of the Gods", "BNG");
  }
}

module.exports = EliteSkirmisher;
