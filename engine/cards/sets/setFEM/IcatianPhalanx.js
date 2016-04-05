"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianPhalanx extends UnimplementedCard {
  constructor(game) {
    super(game, "Icatian Phalanx", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianPhalanx;
