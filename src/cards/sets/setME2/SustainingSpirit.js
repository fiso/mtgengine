"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SustainingSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Sustaining Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = SustainingSpirit;
