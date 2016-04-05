"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dragonstorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragonstorm", "From the Vault: Dragons", "DRB");
  }
}

module.exports = Dragonstorm;
