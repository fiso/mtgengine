"use strict";
const Constants = require ("../../../Constants");
const SyphonFleshBase = require("../setCM2/SyphonFlesh");

class SyphonFlesh extends SyphonFleshBase {
  constructor (game) {
    super(game, "Syphon Flesh", "Commander Anthology", "CMA");
  }
}

module.exports = SyphonFlesh;
