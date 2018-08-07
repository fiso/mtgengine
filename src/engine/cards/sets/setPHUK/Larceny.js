"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Larceny extends UnimplementedCard {
  constructor (game) {
    super(game, "Larceny", "Hachette UK", "PHUK");
  }
}

module.exports = Larceny;
