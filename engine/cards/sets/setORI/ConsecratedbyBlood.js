"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsecratedbyBlood extends UnimplementedCard {
  constructor(game) {
    super(game, "Consecrated by Blood", "Magic Origins", "ORI");
  }
}

module.exports = ConsecratedbyBlood;
