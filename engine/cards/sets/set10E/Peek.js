"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeekBase = require("../setODY/Peek.js");

class Peek extends PeekBase {
  constructor(game) {
    super(game, "Peek", "Tenth Edition", "10E");
  }
}

module.exports = Peek;
