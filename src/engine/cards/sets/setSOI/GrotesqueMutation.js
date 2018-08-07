"use strict";
const Constants = require ("../../../Constants");
const GrotesqueMutationBase = require("../setBBD/GrotesqueMutation");

class GrotesqueMutation extends GrotesqueMutationBase {
  constructor (game) {
    super(game, "Grotesque Mutation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GrotesqueMutation;
