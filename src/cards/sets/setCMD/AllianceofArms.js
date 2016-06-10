"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllianceofArms extends UnimplementedCard {
  constructor (game) {
    super(game, "Alliance of Arms", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AllianceofArms;
