"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandAbolisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Grand Abolisher", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = GrandAbolisher;
