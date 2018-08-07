"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = WindSpirit;
