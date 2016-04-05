"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianInfantry extends UnimplementedCard {
  constructor(game) {
    super(game, "Icatian Infantry", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianInfantry;
