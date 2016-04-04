"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VesuvanDoppelganger extends Card {
  constructor(game) {
    super(game, "Vesuvan Doppelganger", "Collector's Edition", "CED");
  }
}

module.exports = VesuvanDoppelganger;
