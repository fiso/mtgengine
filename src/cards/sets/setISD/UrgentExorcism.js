"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrgentExorcism extends UnimplementedCard {
  constructor (game) {
    super(game, "Urgent Exorcism", "Innistrad", "ISD");
  }
}

module.exports = UrgentExorcism;
