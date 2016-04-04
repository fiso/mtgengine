"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalloftheFullMoon extends Card {
  constructor(game) {
    super(game, "Call of the Full Moon", "Magic Origins", "ORI");
  }
}

module.exports = CalloftheFullMoon;
