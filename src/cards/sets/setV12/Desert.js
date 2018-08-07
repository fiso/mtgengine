"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Desert extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert", "From the Vault: Realms", "V12");
  }
}

module.exports = Desert;
