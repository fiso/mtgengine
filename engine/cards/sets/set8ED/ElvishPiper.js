"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishPiper extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Piper", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishPiper;
