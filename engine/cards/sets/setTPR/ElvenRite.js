"use strict";
const Constants = require ("../../../Constants");
const ElvenRiteBase = require("../setSTH/ElvenRite");

class ElvenRite extends ElvenRiteBase {
  constructor(game) {
    super(game, "Elven Rite", "Tempest Remastered", "TPR");
  }
}

module.exports = ElvenRite;
