"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanAdvocate extends UnimplementedCard {
  constructor(game) {
    super(game, "Sylvan Advocate", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SylvanAdvocate;
