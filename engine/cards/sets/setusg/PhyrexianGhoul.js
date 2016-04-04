"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianGhoulBase = require("../setBRB/PhyrexianGhoul.js");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor(game) {
    super(game, "Phyrexian Ghoul", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianGhoul;
