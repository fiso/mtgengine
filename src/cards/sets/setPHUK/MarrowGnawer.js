"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarrowGnawer extends UnimplementedCard {
  constructor (game) {
    super(game, "Marrow-Gnawer", "Hachette UK", "PHUK");
  }
}

module.exports = MarrowGnawer;
