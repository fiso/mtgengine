"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightofStromgaldBase = require("../setATH/KnightofStromgald.js");

class KnightofStromgald extends KnightofStromgaldBase {
  constructor(game) {
    super(game, "Knight of Stromgald", "Fifth Edition", "5ED");
  }
}

module.exports = KnightofStromgald;
