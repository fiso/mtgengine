"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloakofConfusion extends Card {
  constructor(game) {
    super(game, "Cloak of Confusion", "Fifth Edition", "5ED");
  }
}

module.exports = CloakofConfusion;
