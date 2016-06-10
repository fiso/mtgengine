"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningAdvisor extends UnimplementedCard {
  constructor (game) {
    super(game, "Cunning Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CunningAdvisor;
