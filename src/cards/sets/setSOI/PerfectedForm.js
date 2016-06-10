"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerfectedForm extends UnimplementedCard {
  constructor (game) {
    super(game, "Perfected Form", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PerfectedForm;
