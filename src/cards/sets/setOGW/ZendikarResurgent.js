"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZendikarResurgent extends UnimplementedCard {
  constructor (game) {
    super(game, "Zendikar Resurgent", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ZendikarResurgent;
