"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicPact extends UnimplementedCard {
  constructor(game) {
    super(game, "Demonic Pact", "Magic Origins", "ORI");
  }
}

module.exports = DemonicPact;
