"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BindingAgony extends UnimplementedCard {
  constructor (game) {
    super(game, "Binding Agony", "Mirage", "MIR");
  }
}

module.exports = BindingAgony;
