"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Levitation extends UnimplementedCard {
  constructor(game) {
    super(game, "Levitation", "Magic 2010", "M10");
  }
}

module.exports = Levitation;
