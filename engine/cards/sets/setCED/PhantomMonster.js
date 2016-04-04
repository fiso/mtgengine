"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantomMonster extends Card {
  constructor(game) {
    super(game, "Phantom Monster", "Collector's Edition", "CED");
  }
}

module.exports = PhantomMonster;
