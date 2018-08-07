"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Offering", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = VolcanicOffering;
