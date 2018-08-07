"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpendingDisaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Impending Disaster", "Urza's Legacy", "ULG");
  }
}

module.exports = ImpendingDisaster;
