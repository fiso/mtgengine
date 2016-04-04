"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JuniperOrderRanger extends Card {
  constructor(game) {
    super(game, "Juniper Order Ranger", "Coldsnap", "CSP");
  }
}

module.exports = JuniperOrderRanger;
