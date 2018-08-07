"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChroniclerofHeroes extends UnimplementedCard {
  constructor (game) {
    super(game, "Chronicler of Heroes", "Iconic Masters", "IMA");
  }
}

module.exports = ChroniclerofHeroes;
