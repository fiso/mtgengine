"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disfigure extends UnimplementedCard {
  constructor (game) {
    super(game, "Disfigure", "Zendikar", "ZEN");
  }
}

module.exports = Disfigure;
