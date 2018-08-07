"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlaringCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Blaring Captain", "Battlebond Promos", "PBBD");
  }
}

module.exports = BlaringCaptain;
