"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefulEidolon extends UnimplementedCard {
  constructor (game) {
    super(game, "Baleful Eidolon", "Theros", "THS");
  }
}

module.exports = BalefulEidolon;
