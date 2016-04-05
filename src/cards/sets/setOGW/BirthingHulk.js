"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BirthingHulk extends UnimplementedCard {
  constructor(game) {
    super(game, "Birthing Hulk", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BirthingHulk;
