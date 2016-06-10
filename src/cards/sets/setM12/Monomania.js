"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Monomania extends UnimplementedCard {
  constructor (game) {
    super(game, "Monomania", "Magic 2012", "M12");
  }
}

module.exports = Monomania;
