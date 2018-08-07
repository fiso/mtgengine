"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuietContemplation extends UnimplementedCard {
  constructor (game) {
    super(game, "Quiet Contemplation", "Khans of Tarkir", "KTK");
  }
}

module.exports = QuietContemplation;
