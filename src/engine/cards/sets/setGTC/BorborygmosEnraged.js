"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorborygmosEnraged extends UnimplementedCard {
  constructor (game) {
    super(game, "Borborygmos Enraged", "Gatecrash", "GTC");
  }
}

module.exports = BorborygmosEnraged;
