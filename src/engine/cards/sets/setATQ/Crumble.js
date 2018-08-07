"use strict";
const Constants = require ("../../../Constants");
const CrumbleBase = require("../setME4/Crumble");

class Crumble extends CrumbleBase {
  constructor (game) {
    super(game, "Crumble", "Antiquities", "ATQ");
  }
}

module.exports = Crumble;
