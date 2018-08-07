"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraspoftheHieromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Grasp of the Hieromancer", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = GraspoftheHieromancer;
