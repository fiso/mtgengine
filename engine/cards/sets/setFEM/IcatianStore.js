"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcatianStore extends Card {
  constructor(game) {
    super(game, "Icatian Store", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianStore;
