"use strict";
const Constants = require ("../../../Constants");
const TheRackBase = require("../setDPA/TheRack");

class TheRack extends TheRackBase {
  constructor (game) {
    super(game, "The Rack", "Antiquities", "ATQ");
  }
}

module.exports = TheRack;
