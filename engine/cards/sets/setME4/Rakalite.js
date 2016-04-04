"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakaliteBase = require("../setATQ/Rakalite.js");

class Rakalite extends RakaliteBase {
  constructor(game) {
    super(game, "Rakalite", "Masters Edition IV", "ME4");
  }
}

module.exports = Rakalite;
