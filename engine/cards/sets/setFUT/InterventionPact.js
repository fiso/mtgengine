"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InterventionPact extends UnimplementedCard {
  constructor(game) {
    super(game, "Intervention Pact", "Future Sight", "FUT");
  }
}

module.exports = InterventionPact;
