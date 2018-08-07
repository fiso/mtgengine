"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AureliatheWarleader extends UnimplementedCard {
  constructor (game) {
    super(game, "Aurelia, the Warleader", "From the Vault: Angels", "V15");
  }
}

module.exports = AureliatheWarleader;
