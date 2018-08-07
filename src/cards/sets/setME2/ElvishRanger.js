"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Ranger", "Masters Edition II", "ME2");
  }
}

module.exports = ElvishRanger;
