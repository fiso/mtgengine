"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blockbuster extends UnimplementedCard {
  constructor (game) {
    super(game, "Blockbuster", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Blockbuster;
