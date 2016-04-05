"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nevermore extends UnimplementedCard {
  constructor(game) {
    super(game, "Nevermore", "Innistrad", "ISD");
  }
}

module.exports = Nevermore;
