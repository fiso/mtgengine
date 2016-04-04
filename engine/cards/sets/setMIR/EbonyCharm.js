"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonyCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Ebony Charm", "Mirage", "MIR");
  }
}

module.exports = EbonyCharm;
