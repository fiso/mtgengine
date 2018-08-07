"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Commander", "Planar Chaos", "PLC");
  }
}

module.exports = BenalishCommander;
