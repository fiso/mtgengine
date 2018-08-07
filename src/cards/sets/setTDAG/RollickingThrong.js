"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RollickingThrong extends UnimplementedCard {
  constructor (game) {
    super(game, "Rollicking Throng", "Defeat a God", "TDAG");
  }
}

module.exports = RollickingThrong;
