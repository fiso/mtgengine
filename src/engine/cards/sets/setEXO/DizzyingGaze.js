"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DizzyingGaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Dizzying Gaze", "Exodus", "EXO");
  }
}

module.exports = DizzyingGaze;
