"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mossdog extends UnimplementedCard {
  constructor (game) {
    super(game, "Mossdog", "Nemesis", "NEM");
  }
}

module.exports = Mossdog;
