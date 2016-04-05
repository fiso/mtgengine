"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavocSower extends UnimplementedCard {
  constructor(game) {
    super(game, "Havoc Sower", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HavocSower;
