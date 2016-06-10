"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Malignus extends UnimplementedCard {
  constructor (game) {
    super(game, "Malignus", "Avacyn Restored", "AVR");
  }
}

module.exports = Malignus;
