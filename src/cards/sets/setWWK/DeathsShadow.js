"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsShadow extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's Shadow", "Worldwake", "WWK");
  }
}

module.exports = DeathsShadow;
