"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisaratheDreadful extends UnimplementedCard {
  constructor (game) {
    super(game, "Visara the Dreadful", "Eternal Masters", "EMA");
  }
}

module.exports = VisaratheDreadful;
