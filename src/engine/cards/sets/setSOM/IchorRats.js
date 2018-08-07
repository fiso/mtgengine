"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IchorRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Ichor Rats", "Scars of Mirrodin", "SOM");
  }
}

module.exports = IchorRats;
