"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaveofBolas extends UnimplementedCard {
  constructor (game) {
    super(game, "Slave of Bolas", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = SlaveofBolas;
