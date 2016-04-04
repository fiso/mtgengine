"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladewingtheRisen extends UnimplementedCard {
  constructor(game) {
    super(game, "Bladewing the Risen", "From the Vault: Dragons", "DRB");
  }
}

module.exports = BladewingtheRisen;
