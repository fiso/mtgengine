"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulmender extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulmender", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Soulmender;
