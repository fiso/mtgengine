"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvacynthePurifier extends UnimplementedCard {
  constructor (game) {
    super(game, "Avacyn, the Purifier", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AvacynthePurifier;
