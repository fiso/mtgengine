"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvenRiteBase = require("../setSTH/ElvenRite.js");

class ElvenRite extends ElvenRiteBase {
  constructor(game) {
    super(game, "Elven Rite", "Tempest Remastered", "TPR");
  }
}

module.exports = ElvenRite;
