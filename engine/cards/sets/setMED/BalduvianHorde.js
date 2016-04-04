"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalduvianHordeBase = require("../setALL/BalduvianHorde.js");

class BalduvianHorde extends BalduvianHordeBase {
  constructor(game) {
    super(game, "Balduvian Horde", "Masters Edition", "MED");
  }
}

module.exports = BalduvianHorde;
