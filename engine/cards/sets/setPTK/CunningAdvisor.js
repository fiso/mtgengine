"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CunningAdvisor extends Card {
  constructor(game) {
    super(game, "Cunning Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CunningAdvisor;
