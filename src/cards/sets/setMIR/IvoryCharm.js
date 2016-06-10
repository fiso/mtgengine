"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Charm", "Mirage", "MIR");
  }
}

module.exports = IvoryCharm;
