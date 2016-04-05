"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianSkirmishers extends UnimplementedCard {
  constructor(game) {
    super(game, "Icatian Skirmishers", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianSkirmishers;
