"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrServitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Servitor", "Fifth Dawn", "5DN");
  }
}

module.exports = MyrServitor;
