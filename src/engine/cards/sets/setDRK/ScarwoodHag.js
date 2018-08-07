"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScarwoodHag extends UnimplementedCard {
  constructor (game) {
    super(game, "Scarwood Hag", "The Dark", "DRK");
  }
}

module.exports = ScarwoodHag;
