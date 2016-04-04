"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrotesqueMutation extends Card {
  constructor(game) {
    super(game, "Grotesque Mutation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GrotesqueMutation;
