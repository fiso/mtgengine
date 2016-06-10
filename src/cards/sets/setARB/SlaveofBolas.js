"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaveofBolas extends UnimplementedCard {
  constructor (game) {
    super(game, "Slave of Bolas", "Alara Reborn", "ARB");
  }
}

module.exports = SlaveofBolas;
