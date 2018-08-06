"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WharfInfiltrator extends UnimplementedCard {
  constructor (game) {
    super(game, "Wharf Infiltrator", "Eldritch Moon", "EMN");
  }
}

module.exports = WharfInfiltrator;
