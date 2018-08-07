"use strict";
const Constants = require ("../../../Constants");
const ExquisiteFirecraftBase = require("../setPORI/ExquisiteFirecraft");

class ExquisiteFirecraft extends ExquisiteFirecraftBase {
  constructor (game) {
    super(game, "Exquisite Firecraft", "Magic Online Promos", "PRM");
  }
}

module.exports = ExquisiteFirecraft;
