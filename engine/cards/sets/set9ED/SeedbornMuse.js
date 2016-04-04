"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeedbornMuseBase = require("../setLGN/SeedbornMuse.js");

class SeedbornMuse extends SeedbornMuseBase {
  constructor(game) {
    super(game, "Seedborn Muse", "Ninth Edition", "9ED");
  }
}

module.exports = SeedbornMuse;
