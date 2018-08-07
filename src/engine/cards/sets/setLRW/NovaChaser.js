"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NovaChaser extends UnimplementedCard {
  constructor (game) {
    super(game, "Nova Chaser", "Lorwyn", "LRW");
  }
}

module.exports = NovaChaser;
