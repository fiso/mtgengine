"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomaridShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Homarid Shaman", "Fallen Empires", "FEM");
  }
}

module.exports = HomaridShaman;
