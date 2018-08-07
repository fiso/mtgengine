"use strict";
const Constants = require ("../../../Constants");
const GushBase = require("../setJVC/Gush");

class Gush extends GushBase {
  constructor (game) {
    super(game, "Gush", "Magic Online Promos", "PRM");
  }
}

module.exports = Gush;
