"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RighteousAuthority extends Card {
  constructor(game) {
    super(game, "Righteous Authority", "Return to Ravnica", "RTR");
  }
}

module.exports = RighteousAuthority;
