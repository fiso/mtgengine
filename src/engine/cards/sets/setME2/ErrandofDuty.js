"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErrandofDuty extends UnimplementedCard {
  constructor (game) {
    super(game, "Errand of Duty", "Masters Edition II", "ME2");
  }
}

module.exports = ErrandofDuty;
