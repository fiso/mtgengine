"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindFuneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Funeral", "Modern Masters", "MMA");
  }
}

module.exports = MindFuneral;
