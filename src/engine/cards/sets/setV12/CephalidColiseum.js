"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidColiseum extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Coliseum", "From the Vault: Realms", "V12");
  }
}

module.exports = CephalidColiseum;
