"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapashenKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Capashen Knight", "Magic 2014 Core Set", "M14");
  }
}

module.exports = CapashenKnight;
