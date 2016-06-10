"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninScimitar extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Scimitar", "Mirrodin", "MRD");
  }
}

module.exports = LeoninScimitar;
