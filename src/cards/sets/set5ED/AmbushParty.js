"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmbushParty extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambush Party", "Fifth Edition", "5ED");
  }
}

module.exports = AmbushParty;
