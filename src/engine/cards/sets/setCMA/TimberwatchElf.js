"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberwatchElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Timberwatch Elf", "Commander Anthology", "CMA");
  }
}

module.exports = TimberwatchElf;
