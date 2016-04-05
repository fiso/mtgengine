"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AfflictedDeserter extends UnimplementedCard {
  constructor(game) {
    super(game, "Afflicted Deserter", "Dark Ascension", "DKA");
  }
}

module.exports = AfflictedDeserter;
