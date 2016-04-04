"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SakashimatheImpostor extends Card {
  constructor(game) {
    super(game, "Sakashima the Impostor", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SakashimatheImpostor;
