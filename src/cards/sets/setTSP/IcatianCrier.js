"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianCrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Icatian Crier", "Time Spiral", "TSP");
  }
}

module.exports = IcatianCrier;
