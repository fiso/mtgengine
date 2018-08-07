"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spinebiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Spinebiter", "New Phyrexia", "NPH");
  }
}

module.exports = Spinebiter;
