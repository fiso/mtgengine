"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmbushParty extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambush Party", "Masters Edition II", "ME2");
  }
}

module.exports = AmbushParty;
