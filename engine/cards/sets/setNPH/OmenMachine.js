"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OmenMachine extends UnimplementedCard {
  constructor(game) {
    super(game, "Omen Machine", "New Phyrexia", "NPH");
  }
}

module.exports = OmenMachine;
