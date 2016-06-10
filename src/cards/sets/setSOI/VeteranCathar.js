"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran Cathar", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VeteranCathar;
