"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Field Marshal", "Tenth Edition", "10E");
  }
}

module.exports = FieldMarshal;
