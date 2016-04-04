"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianMoneychanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Icatian Moneychanger", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianMoneychanger;
