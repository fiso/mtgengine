"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalloftheFullMoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Call of the Full Moon", "Magic Origins", "ORI");
  }
}

module.exports = CalloftheFullMoon;
