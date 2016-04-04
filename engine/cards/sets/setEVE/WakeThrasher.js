"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WakeThrasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Wake Thrasher", "Eventide", "EVE");
  }
}

module.exports = WakeThrasher;
