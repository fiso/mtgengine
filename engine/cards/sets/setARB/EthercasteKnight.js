"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EthercasteKnight extends UnimplementedCard {
  constructor(game) {
    super(game, "Ethercaste Knight", "Alara Reborn", "ARB");
  }
}

module.exports = EthercasteKnight;
