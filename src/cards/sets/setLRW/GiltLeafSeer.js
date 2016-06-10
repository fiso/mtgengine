"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiltLeafSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Gilt-Leaf Seer", "Lorwyn", "LRW");
  }
}

module.exports = GiltLeafSeer;
