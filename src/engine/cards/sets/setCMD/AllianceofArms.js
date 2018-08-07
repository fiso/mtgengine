"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllianceofArms extends UnimplementedCard {
  constructor (game) {
    super(game, "Alliance of Arms", "Commander 2011", "CMD");
  }
}

module.exports = AllianceofArms;
