"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DomineeringWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Domineering Will", "Commander 2014", "C14");
  }
}

module.exports = DomineeringWill;
