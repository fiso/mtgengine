"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Attrition extends UnimplementedCard {
  constructor (game) {
    super(game, "Attrition", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Attrition;
