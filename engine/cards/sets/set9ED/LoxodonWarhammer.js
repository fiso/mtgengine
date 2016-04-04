"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoxodonWarhammerBase = require("../setC14/LoxodonWarhammer.js");

class LoxodonWarhammer extends LoxodonWarhammerBase {
  constructor(game) {
    super(game, "Loxodon Warhammer", "Ninth Edition", "9ED");
  }
}

module.exports = LoxodonWarhammer;
