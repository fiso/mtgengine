"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChitteringRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Chittering Rats", "Hachette UK", "PHUK");
  }
}

module.exports = ChitteringRats;
