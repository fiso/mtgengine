"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidStalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Void Stalker", "Magic 2013", "M13");
  }
}

module.exports = VoidStalker;
