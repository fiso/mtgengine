"use strict";
const Constants = require ("../../../Constants");
const ChroniclerofHeroesBase = require("../setIMA/ChroniclerofHeroes");

class ChroniclerofHeroes extends ChroniclerofHeroesBase {
  constructor (game) {
    super(game, "Chronicler of Heroes", "Theros", "THS");
  }
}

module.exports = ChroniclerofHeroes;
