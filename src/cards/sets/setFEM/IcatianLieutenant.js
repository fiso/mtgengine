"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianLieutenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Icatian Lieutenant", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianLieutenant;
