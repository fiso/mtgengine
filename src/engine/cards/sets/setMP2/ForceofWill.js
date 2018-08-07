"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForceofWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Force of Will", "Amonkhet Invocations", "MP2");
  }
}

module.exports = ForceofWill;
