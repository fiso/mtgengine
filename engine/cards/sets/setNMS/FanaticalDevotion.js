"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FanaticalDevotion extends UnimplementedCard {
  constructor(game) {
    super(game, "Fanatical Devotion", "Nemesis", "NMS");
  }
}

module.exports = FanaticalDevotion;
