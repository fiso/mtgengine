"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaseousForm extends Card {
  constructor(game) {
    super(game, "Gaseous Form", "Beatdown Box Set", "BTD");
  }
}

module.exports = GaseousForm;
