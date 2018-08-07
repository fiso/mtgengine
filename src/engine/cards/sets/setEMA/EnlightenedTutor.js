"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnlightenedTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Enlightened Tutor", "Eternal Masters", "EMA");
  }
}

module.exports = EnlightenedTutor;
