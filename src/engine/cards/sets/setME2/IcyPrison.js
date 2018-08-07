"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcyPrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Icy Prison", "Masters Edition II", "ME2");
  }
}

module.exports = IcyPrison;
