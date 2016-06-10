"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvigoratingFalls extends UnimplementedCard {
  constructor (game) {
    super(game, "Invigorating Falls", "Torment", "TOR");
  }
}

module.exports = InvigoratingFalls;
