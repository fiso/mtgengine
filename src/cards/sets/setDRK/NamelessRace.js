"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NamelessRace extends UnimplementedCard {
  constructor (game) {
    super(game, "Nameless Race", "The Dark", "DRK");
  }
}

module.exports = NamelessRace;
