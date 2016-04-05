"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralThallid extends UnimplementedCard {
  constructor(game) {
    super(game, "Feral Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = FeralThallid;
