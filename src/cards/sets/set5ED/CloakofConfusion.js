"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloakofConfusion extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloak of Confusion", "Fifth Edition", "5ED");
  }
}

module.exports = CloakofConfusion;
