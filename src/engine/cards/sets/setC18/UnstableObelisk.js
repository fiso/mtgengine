"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstableObelisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Unstable Obelisk", "Commander 2018", "C18");
  }
}

module.exports = UnstableObelisk;
