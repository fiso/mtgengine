"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LighthouseChronologist extends UnimplementedCard {
  constructor(game) {
    super(game, "Lighthouse Chronologist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LighthouseChronologist;
