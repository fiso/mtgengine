"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomWhelp extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantom Whelp", "Odyssey", "ODY");
  }
}

module.exports = PhantomWhelp;
