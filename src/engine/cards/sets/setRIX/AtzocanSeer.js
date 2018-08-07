"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AtzocanSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Atzocan Seer", "Rivals of Ixalan", "RIX");
  }
}

module.exports = AtzocanSeer;
