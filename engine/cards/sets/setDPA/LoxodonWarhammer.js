"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoxodonWarhammerBase = require("../setC14/LoxodonWarhammer.js");

class LoxodonWarhammer extends LoxodonWarhammerBase {
  constructor(game) {
    super(game, "Loxodon Warhammer", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = LoxodonWarhammer;
