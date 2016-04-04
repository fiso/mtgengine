"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevenantBase = require("../setORI/Revenant.js");

class Revenant extends RevenantBase {
  constructor(game) {
    super(game, "Revenant", "Seventh Edition", "7ED");
  }
}

module.exports = Revenant;
