"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfectiousRage extends UnimplementedCard {
  constructor(game) {
    super(game, "Infectious Rage", "Judgment", "JUD");
  }
}

module.exports = InfectiousRage;
