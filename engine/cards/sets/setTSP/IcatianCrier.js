"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcatianCrier extends Card {
  constructor(game) {
    super(game, "Icatian Crier", "Time Spiral", "TSP");
  }
}

module.exports = IcatianCrier;
