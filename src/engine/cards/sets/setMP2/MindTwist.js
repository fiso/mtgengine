"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindTwist extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Twist", "Amonkhet Invocations", "MP2");
  }
}

module.exports = MindTwist;
