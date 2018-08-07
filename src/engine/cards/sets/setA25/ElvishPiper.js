"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishPiper extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Piper", "Masters 25", "A25");
  }
}

module.exports = ElvishPiper;
