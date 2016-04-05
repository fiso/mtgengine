"use strict";
const Constants = require ("../../../Constants");
const TheRackBase = require("../setATQ/TheRack");

class TheRack extends TheRackBase {
  constructor(game) {
    super(game, "The Rack", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = TheRack;
