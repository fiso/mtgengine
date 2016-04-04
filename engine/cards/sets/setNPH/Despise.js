"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DespiseBase = require("../setpFNM/Despise.js");

class Despise extends DespiseBase {
  constructor(game) {
    super(game, "Despise", "New Phyrexia", "NPH");
  }
}

module.exports = Despise;
