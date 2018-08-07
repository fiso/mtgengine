"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Braingeyser extends UnimplementedCard {
  constructor (game) {
    super(game, "Braingeyser", "Masters Edition IV", "ME4");
  }
}

module.exports = Braingeyser;
