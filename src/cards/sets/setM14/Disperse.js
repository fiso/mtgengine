"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disperse extends UnimplementedCard {
  constructor (game) {
    super(game, "Disperse", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Disperse;
