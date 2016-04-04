"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightofStromgaldBase = require("../setATH/KnightofStromgald.js");

class KnightofStromgald extends KnightofStromgaldBase {
  constructor(game) {
    super(game, "Knight of Stromgald", "Masters Edition II", "ME2");
  }
}

module.exports = KnightofStromgald;
