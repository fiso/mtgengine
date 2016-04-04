"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrassManBase = require("../setARN/BrassMan.js");

class BrassMan extends BrassManBase {
  constructor(game) {
    super(game, "Brass Man", "Revised Edition", "3ED");
  }
}

module.exports = BrassMan;
