"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkofAsylum extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark of Asylum", "Conflux", "CON");
  }
}

module.exports = MarkofAsylum;
