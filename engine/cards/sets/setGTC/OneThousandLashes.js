"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OneThousandLashes extends UnimplementedCard {
  constructor(game) {
    super(game, "One Thousand Lashes", "Gatecrash", "GTC");
  }
}

module.exports = OneThousandLashes;
