"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldofSouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Field of Souls", "Eternal Masters", "EMA");
  }
}

module.exports = FieldofSouls;
