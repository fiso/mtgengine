"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyLaughterEchoes extends UnimplementedCard {
  constructor (game) {
    super(game, "My Laughter Echoes", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = MyLaughterEchoes;
