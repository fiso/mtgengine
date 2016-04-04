"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeedbornMuseBase = require("../setLGN/SeedbornMuse.js");

class SeedbornMuse extends SeedbornMuseBase {
  constructor(game) {
    super(game, "Seedborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = SeedbornMuse;
