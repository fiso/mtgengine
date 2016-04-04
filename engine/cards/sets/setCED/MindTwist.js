"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindTwist extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Twist", "Collector's Edition", "CED");
  }
}

module.exports = MindTwist;
