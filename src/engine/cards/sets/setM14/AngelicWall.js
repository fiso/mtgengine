"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Wall", "Magic 2014", "M14");
  }
}

module.exports = AngelicWall;
