"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoggartBrute extends Card {
  constructor(game) {
    super(game, "Boggart Brute", "Magic Origins", "ORI");
  }
}

module.exports = BoggartBrute;
