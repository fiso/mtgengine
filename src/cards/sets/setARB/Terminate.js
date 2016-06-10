"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terminate extends UnimplementedCard {
  constructor (game) {
    super(game, "Terminate", "Alara Reborn", "ARB");
  }
}

module.exports = Terminate;
