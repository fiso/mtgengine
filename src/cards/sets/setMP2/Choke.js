"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Choke extends UnimplementedCard {
  constructor (game) {
    super(game, "Choke", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Choke;
