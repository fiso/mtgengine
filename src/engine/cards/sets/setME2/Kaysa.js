"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kaysa extends UnimplementedCard {
  constructor (game) {
    super(game, "Kaysa", "Masters Edition II", "ME2");
  }
}

module.exports = Kaysa;
