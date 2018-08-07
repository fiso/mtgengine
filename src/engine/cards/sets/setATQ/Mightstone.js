"use strict";
const Constants = require ("../../../Constants");
const MightstoneBase = require("../setME4/Mightstone");

class Mightstone extends MightstoneBase {
  constructor (game) {
    super(game, "Mightstone", "Antiquities", "ATQ");
  }
}

module.exports = Mightstone;
