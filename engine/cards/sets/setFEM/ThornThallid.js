"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornThallid extends UnimplementedCard {
  constructor(game) {
    super(game, "Thorn Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = ThornThallid;
