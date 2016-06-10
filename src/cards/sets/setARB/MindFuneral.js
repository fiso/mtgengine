"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindFuneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Funeral", "Alara Reborn", "ARB");
  }
}

module.exports = MindFuneral;
