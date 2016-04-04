"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NovaChaser extends Card {
  constructor(game) {
    super(game, "Nova Chaser", "Lorwyn", "LRW");
  }
}

module.exports = NovaChaser;
