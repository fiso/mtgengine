"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrborgElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Urborg Elf", "Apocalypse", "APC");
  }
}

module.exports = UrborgElf;
