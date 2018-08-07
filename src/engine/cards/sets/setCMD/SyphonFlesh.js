"use strict";
const Constants = require ("../../../Constants");
const SyphonFleshBase = require("../setCM2/SyphonFlesh");

class SyphonFlesh extends SyphonFleshBase {
  constructor (game) {
    super(game, "Syphon Flesh", "Commander 2011", "CMD");
  }
}

module.exports = SyphonFlesh;
