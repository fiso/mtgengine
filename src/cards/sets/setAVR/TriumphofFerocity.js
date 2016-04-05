"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriumphofFerocity extends UnimplementedCard {
  constructor(game) {
    super(game, "Triumph of Ferocity", "Avacyn Restored", "AVR");
  }
}

module.exports = TriumphofFerocity;
