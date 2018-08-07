"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Damnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Damnation", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Damnation;
