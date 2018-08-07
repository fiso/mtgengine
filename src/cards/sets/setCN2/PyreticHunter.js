"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyreticHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyretic Hunter", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PyreticHunter;
