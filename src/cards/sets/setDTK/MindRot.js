"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindRot extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Rot", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MindRot;
