"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manabarbs extends UnimplementedCard {
  constructor (game) {
    super(game, "Manabarbs", "Magic 2012", "M12");
  }
}

module.exports = Manabarbs;
