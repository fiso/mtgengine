"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimordialOozeBase = require("../setCHR/PrimordialOoze.js");

class PrimordialOoze extends PrimordialOozeBase {
  constructor(game) {
    super(game, "Primordial Ooze", "Fifth Edition", "5ED");
  }
}

module.exports = PrimordialOoze;
