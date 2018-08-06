"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnlightenedManiac extends UnimplementedCard {
  constructor (game) {
    super(game, "Enlightened Maniac", "Eldritch Moon", "EMN");
  }
}

module.exports = EnlightenedManiac;
