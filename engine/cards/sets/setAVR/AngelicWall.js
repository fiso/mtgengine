"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelic Wall", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelicWall;
