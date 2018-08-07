"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrborgStalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Urborg Stalker", "Weatherlight", "WTH");
  }
}

module.exports = UrborgStalker;
