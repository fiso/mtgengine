"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiranhaMarsh extends UnimplementedCard {
  constructor(game) {
    super(game, "Piranha Marsh", "Zendikar", "ZEN");
  }
}

module.exports = PiranhaMarsh;
