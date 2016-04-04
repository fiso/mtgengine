"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FormlessNurturing extends UnimplementedCard {
  constructor(game) {
    super(game, "Formless Nurturing", "Fate Reforged", "FRF");
  }
}

module.exports = FormlessNurturing;
