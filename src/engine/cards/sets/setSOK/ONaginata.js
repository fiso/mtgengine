"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ONaginata extends UnimplementedCard {
  constructor (game) {
    super(game, "O-Naginata", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ONaginata;
