"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErebosGodoftheDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Erebos, God of the Dead", "Theros", "THS");
  }
}

module.exports = ErebosGodoftheDead;
