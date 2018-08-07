"use strict";
const Constants = require ("../../../Constants");
const HuatliRadiantChampionBase = require("../setPRIX/HuatliRadiantChampion");

class HuatliRadiantChampion extends HuatliRadiantChampionBase {
  constructor (game) {
    super(game, "Huatli, Radiant Champion", "Rivals of Ixalan", "RIX");
  }
}

module.exports = HuatliRadiantChampion;
