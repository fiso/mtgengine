"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DocentofPerfection extends UnimplementedCard {
  constructor (game) {
    super(game, "Docent of Perfection", "Eldritch Moon", "EMN");
  }
}

module.exports = DocentofPerfection;
