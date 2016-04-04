"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeiScout extends Card {
  constructor(game) {
    super(game, "Wei Scout", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WeiScout;
