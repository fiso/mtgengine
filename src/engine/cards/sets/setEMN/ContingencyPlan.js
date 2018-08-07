"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContingencyPlan extends UnimplementedCard {
  constructor (game) {
    super(game, "Contingency Plan", "Eldritch Moon", "EMN");
  }
}

module.exports = ContingencyPlan;
