"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disembowel extends UnimplementedCard {
  constructor (game) {
    super(game, "Disembowel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Disembowel;
