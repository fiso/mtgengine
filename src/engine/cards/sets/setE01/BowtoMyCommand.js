"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BowtoMyCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Bow to My Command", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = BowtoMyCommand;
