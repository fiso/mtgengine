"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rootwalla extends UnimplementedCard {
  constructor(game) {
    super(game, "Rootwalla", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Rootwalla;
