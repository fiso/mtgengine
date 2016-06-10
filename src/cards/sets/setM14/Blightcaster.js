"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blightcaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Blightcaster", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Blightcaster;
