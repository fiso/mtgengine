"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResoundingThunder extends UnimplementedCard {
  constructor(game) {
    super(game, "Resounding Thunder", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingThunder;
