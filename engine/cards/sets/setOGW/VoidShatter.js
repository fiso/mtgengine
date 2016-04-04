"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidShatter extends UnimplementedCard {
  constructor(game) {
    super(game, "Void Shatter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VoidShatter;
