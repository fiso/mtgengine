"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EsperCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Esper Charm", "Commander 2018", "C18");
  }
}

module.exports = EsperCharm;
