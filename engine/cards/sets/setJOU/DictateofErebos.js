"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DictateofErebos extends UnimplementedCard {
  constructor(game) {
    super(game, "Dictate of Erebos", "Journey into Nyx", "JOU");
  }
}

module.exports = DictateofErebos;
