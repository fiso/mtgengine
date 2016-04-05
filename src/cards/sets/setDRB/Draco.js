"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Draco extends UnimplementedCard {
  constructor(game) {
    super(game, "Draco", "From the Vault: Dragons", "DRB");
  }
}

module.exports = Draco;
