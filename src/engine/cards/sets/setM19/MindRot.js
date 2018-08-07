"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindRot extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Rot", "Core Set 2019", "M19");
  }
}

module.exports = MindRot;
