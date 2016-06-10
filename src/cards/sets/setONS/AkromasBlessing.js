"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkromasBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Akroma's Blessing", "Onslaught", "ONS");
  }
}

module.exports = AkromasBlessing;
