"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerumVisionsBase = require("../setpARL/SerumVisions.js");

class SerumVisions extends SerumVisionsBase {
  constructor(game) {
    super(game, "Serum Visions", "Fifth Dawn", "5DN");
  }
}

module.exports = SerumVisions;
