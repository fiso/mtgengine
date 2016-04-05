"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverwhelmingDenial extends UnimplementedCard {
  constructor(game) {
    super(game, "Overwhelming Denial", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OverwhelmingDenial;
