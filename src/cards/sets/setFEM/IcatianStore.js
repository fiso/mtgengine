"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianStore extends UnimplementedCard {
  constructor (game) {
    super(game, "Icatian Store", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianStore;
