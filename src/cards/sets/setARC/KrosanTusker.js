"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanTusker extends UnimplementedCard {
  constructor(game) {
    super(game, "Krosan Tusker", "Archenemy", "ARC");
  }
}

module.exports = KrosanTusker;
