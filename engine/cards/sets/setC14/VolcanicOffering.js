"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicOffering extends UnimplementedCard {
  constructor(game) {
    super(game, "Volcanic Offering", "Commander 2014", "C14");
  }
}

module.exports = VolcanicOffering;
