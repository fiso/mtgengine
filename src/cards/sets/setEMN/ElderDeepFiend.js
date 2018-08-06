"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderDeepFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Elder Deep-Fiend", "Eldritch Moon", "EMN");
  }
}

module.exports = ElderDeepFiend;
