"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RallytheRighteous extends UnimplementedCard {
  constructor(game) {
    super(game, "Rally the Righteous", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RallytheRighteous;
