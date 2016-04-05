"use strict";
const Constants = require ("../../../Constants");
const EtherealChampionBase = require("../set6ED/EtherealChampion");

class EtherealChampion extends EtherealChampionBase {
  constructor(game) {
    super(game, "Ethereal Champion", "Mirage", "MIR");
  }
}

module.exports = EtherealChampion;
