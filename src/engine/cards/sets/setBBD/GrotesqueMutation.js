"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrotesqueMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Grotesque Mutation", "Battlebond", "BBD");
  }
}

module.exports = GrotesqueMutation;
