"use strict";
const Constants = require ("../../../Constants");
const RakaliteBase = require("../setME4/Rakalite");

class Rakalite extends RakaliteBase {
  constructor (game) {
    super(game, "Rakalite", "Antiquities", "ATQ");
  }
}

module.exports = Rakalite;
