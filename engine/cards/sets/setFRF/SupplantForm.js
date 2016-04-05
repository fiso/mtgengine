"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupplantForm extends UnimplementedCard {
  constructor(game) {
    super(game, "Supplant Form", "Fate Reforged", "FRF");
  }
}

module.exports = SupplantForm;
