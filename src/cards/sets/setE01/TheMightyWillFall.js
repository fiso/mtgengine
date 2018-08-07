"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheMightyWillFall extends UnimplementedCard {
  constructor (game) {
    super(game, "The Mighty Will Fall", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = TheMightyWillFall;
