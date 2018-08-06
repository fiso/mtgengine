"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wasteland extends UnimplementedCard {
  constructor (game) {
    super(game, "Wasteland", "Eternal Masters", "EMA");
  }
}

module.exports = Wasteland;
