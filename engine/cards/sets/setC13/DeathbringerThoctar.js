"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathbringerThoctarBase = require("../setARB/DeathbringerThoctar.js");

class DeathbringerThoctar extends DeathbringerThoctarBase {
  constructor(game) {
    super(game, "Deathbringer Thoctar", "Commander 2013 Edition", "C13");
  }
}

module.exports = DeathbringerThoctar;
