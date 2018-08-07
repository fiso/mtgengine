"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Leeches extends UnimplementedCard {
  constructor (game) {
    super(game, "Leeches", "Masters Edition IV", "ME4");
  }
}

module.exports = Leeches;
