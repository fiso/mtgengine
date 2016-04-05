"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GathertheTownsfolk extends UnimplementedCard {
  constructor(game) {
    super(game, "Gather the Townsfolk", "Dark Ascension", "DKA");
  }
}

module.exports = GathertheTownsfolk;
