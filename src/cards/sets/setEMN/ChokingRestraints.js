"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChokingRestraints extends UnimplementedCard {
  constructor (game) {
    super(game, "Choking Restraints", "Eldritch Moon", "EMN");
  }
}

module.exports = ChokingRestraints;
