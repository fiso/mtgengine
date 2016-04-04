"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyromancersAssault extends UnimplementedCard {
  constructor(game) {
    super(game, "Pyromancer's Assault", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = PyromancersAssault;
