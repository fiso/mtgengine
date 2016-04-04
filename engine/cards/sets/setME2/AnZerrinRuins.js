"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnZerrinRuinsBase = require("../setHML/AnZerrinRuins.js");

class AnZerrinRuins extends AnZerrinRuinsBase {
  constructor(game) {
    super(game, "An-Zerrin Ruins", "Masters Edition II", "ME2");
  }
}

module.exports = AnZerrinRuins;
