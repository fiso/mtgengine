"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldofDreams extends UnimplementedCard {
  constructor (game) {
    super(game, "Field of Dreams", "You Make the Cube", "PZ2");
  }
}

module.exports = FieldofDreams;
