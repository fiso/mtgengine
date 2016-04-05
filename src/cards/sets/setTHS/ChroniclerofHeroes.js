"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChroniclerofHeroes extends UnimplementedCard {
  constructor(game) {
    super(game, "Chronicler of Heroes", "Theros", "THS");
  }
}

module.exports = ChroniclerofHeroes;
