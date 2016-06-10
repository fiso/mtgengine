"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArdentPlea extends UnimplementedCard {
  constructor (game) {
    super(game, "Ardent Plea", "Alara Reborn", "ARB");
  }
}

module.exports = ArdentPlea;
