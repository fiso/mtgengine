"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrighthearthBanneret extends UnimplementedCard {
  constructor(game) {
    super(game, "Brighthearth Banneret", "Morningtide", "MOR");
  }
}

module.exports = BrighthearthBanneret;
