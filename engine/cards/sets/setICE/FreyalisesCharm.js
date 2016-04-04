"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreyalisesCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Freyalise's Charm", "Ice Age", "ICE");
  }
}

module.exports = FreyalisesCharm;
