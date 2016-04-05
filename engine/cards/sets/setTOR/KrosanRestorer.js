"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanRestorer extends UnimplementedCard {
  constructor(game) {
    super(game, "Krosan Restorer", "Torment", "TOR");
  }
}

module.exports = KrosanRestorer;
