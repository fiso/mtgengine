"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurvivoroftheUnseen extends UnimplementedCard {
  constructor(game) {
    super(game, "Survivor of the Unseen", "Coldsnap", "CSP");
  }
}

module.exports = SurvivoroftheUnseen;
