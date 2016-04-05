"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltheGatewatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Call the Gatewatch", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CalltheGatewatch;
