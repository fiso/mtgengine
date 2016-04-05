"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnnervingAssault extends UnimplementedCard {
  constructor(game) {
    super(game, "Unnerving Assault", "Eventide", "EVE");
  }
}

module.exports = UnnervingAssault;
