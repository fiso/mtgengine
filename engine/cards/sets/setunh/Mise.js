"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MiseBase = require("../setpARL/Mise.js");

class Mise extends MiseBase {
  constructor(game) {
    super(game, "Mise", "Unhinged", "UNH");
  }
}

module.exports = Mise;
