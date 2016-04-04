"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcatianMoneychanger extends Card {
  constructor(game) {
    super(game, "Icatian Moneychanger", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianMoneychanger;
