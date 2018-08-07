"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gravestorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Gravestorm", "Hachette UK", "PHUK");
  }
}

module.exports = Gravestorm;
