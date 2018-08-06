"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanweirGarrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanweir Garrison", "Eldritch Moon", "EMN");
  }
}

module.exports = HanweirGarrison;
