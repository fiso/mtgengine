"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OneThousandLashes extends Card {
  constructor(game) {
    super(game, "One Thousand Lashes", "Gatecrash", "GTC");
  }
}

module.exports = OneThousandLashes;
