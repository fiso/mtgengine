"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Orzhov Signet", "Commander 2018", "C18");
  }
}

module.exports = OrzhovSignet;
