"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsolationZone extends UnimplementedCard {
  constructor (game) {
    super(game, "Isolation Zone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = IsolationZone;
