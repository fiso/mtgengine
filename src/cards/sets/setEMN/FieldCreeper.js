"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldCreeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Field Creeper", "Eldritch Moon", "EMN");
  }
}

module.exports = FieldCreeper;
