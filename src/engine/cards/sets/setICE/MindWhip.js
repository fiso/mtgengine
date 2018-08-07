"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindWhip extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Whip", "Ice Age", "ICE");
  }
}

module.exports = MindWhip;
