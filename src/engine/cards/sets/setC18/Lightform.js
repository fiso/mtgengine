"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lightform extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightform", "Commander 2018", "C18");
  }
}

module.exports = Lightform;
