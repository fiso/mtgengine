"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CovenantofMinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Covenant of Minds", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CovenantofMinds;
