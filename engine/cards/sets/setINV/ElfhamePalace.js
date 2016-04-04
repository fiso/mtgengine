"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElfhamePalaceBase = require("../setDDE/ElfhamePalace.js");

class ElfhamePalace extends ElfhamePalaceBase {
  constructor(game) {
    super(game, "Elfhame Palace", "Invasion", "INV");
  }
}

module.exports = ElfhamePalace;
