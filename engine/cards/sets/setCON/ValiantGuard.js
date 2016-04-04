"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValiantGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Valiant Guard", "Conflux", "CON");
  }
}

module.exports = ValiantGuard;
