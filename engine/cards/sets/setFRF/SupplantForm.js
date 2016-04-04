"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SupplantForm extends Card {
  constructor(game) {
    super(game, "Supplant Form", "Fate Reforged", "FRF");
  }
}

module.exports = SupplantForm;
