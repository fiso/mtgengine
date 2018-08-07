"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmaranthineWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Amaranthine Wall", "Dominaria", "DOM");
  }
}

module.exports = AmaranthineWall;
