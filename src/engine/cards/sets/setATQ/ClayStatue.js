"use strict";
const Constants = require ("../../../Constants");
const ClayStatueBase = require("../setME4/ClayStatue");

class ClayStatue extends ClayStatueBase {
  constructor (game) {
    super(game, "Clay Statue", "Antiquities", "ATQ");
  }
}

module.exports = ClayStatue;
