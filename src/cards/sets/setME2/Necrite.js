"use strict";
const Constants = require ("../../../Constants");
const NecriteBase = require("../setFEM/Necrite");

class Necrite extends NecriteBase {
  constructor (game) {
    super(game, "Necrite", "Masters Edition II", "ME2");
  }
}

module.exports = Necrite;
