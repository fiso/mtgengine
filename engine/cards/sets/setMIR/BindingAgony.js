"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BindingAgony extends Card {
  constructor(game) {
    super(game, "Binding Agony", "Mirage", "MIR");
  }
}

module.exports = BindingAgony;
