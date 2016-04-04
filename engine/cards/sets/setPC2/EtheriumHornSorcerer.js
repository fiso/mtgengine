"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtheriumHornSorcererBase = require("../setC15/EtheriumHornSorcerer.js");

class EtheriumHornSorcerer extends EtheriumHornSorcererBase {
  constructor(game) {
    super(game, "Etherium-Horn Sorcerer", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = EtheriumHornSorcerer;
