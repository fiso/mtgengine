"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boil extends UnimplementedCard {
  constructor (game) {
    super(game, "Boil", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Boil;
