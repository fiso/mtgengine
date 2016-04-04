"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtherealChampionBase = require("../set6ED/EtherealChampion.js");

class EtherealChampion extends EtherealChampionBase {
  constructor(game) {
    super(game, "Ethereal Champion", "Mirage", "MIR");
  }
}

module.exports = EtherealChampion;
