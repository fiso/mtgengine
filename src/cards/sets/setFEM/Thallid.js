"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thallid extends UnimplementedCard {
  constructor (game) {
    super(game, "Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = Thallid;
