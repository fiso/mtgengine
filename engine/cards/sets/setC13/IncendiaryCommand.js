"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IncendiaryCommand extends Card {
  constructor(game) {
    super(game, "Incendiary Command", "Commander 2013 Edition", "C13");
  }
}

module.exports = IncendiaryCommand;
