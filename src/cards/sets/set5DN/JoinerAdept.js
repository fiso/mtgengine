"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoinerAdept extends UnimplementedCard {
  constructor(game) {
    super(game, "Joiner Adept", "Fifth Dawn", "5DN");
  }
}

module.exports = JoinerAdept;
