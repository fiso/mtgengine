"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrborgElf extends Card {
  constructor(game) {
    super(game, "Urborg Elf", "Apocalypse", "APC");
  }
}

module.exports = UrborgElf;
