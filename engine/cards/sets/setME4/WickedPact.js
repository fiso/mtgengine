"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WickedPact extends UnimplementedCard {
  constructor(game) {
    super(game, "Wicked Pact", "Masters Edition IV", "ME4");
  }
}

module.exports = WickedPact;
