"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivebomberGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Divebomber Griffin", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DivebomberGriffin;
