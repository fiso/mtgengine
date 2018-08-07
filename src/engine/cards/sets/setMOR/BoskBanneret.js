"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoskBanneret extends UnimplementedCard {
  constructor (game) {
    super(game, "Bosk Banneret", "Morningtide", "MOR");
  }
}

module.exports = BoskBanneret;
