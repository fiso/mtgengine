"use strict";
const Constants = require ("../../../Constants");
const NecriteBase = require("../setFEM/Necrite");

class Necrite extends NecriteBase {
  constructor(game) {
    super(game, "Necrite", "Fifth Edition", "5ED");
  }
}

module.exports = Necrite;
