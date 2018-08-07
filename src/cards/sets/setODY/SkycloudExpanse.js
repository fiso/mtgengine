"use strict";
const Constants = require ("../../../Constants");
const SkycloudExpanseBase = require("../setWC03/SkycloudExpanse");

class SkycloudExpanse extends SkycloudExpanseBase {
  constructor (game) {
    super(game, "Skycloud Expanse", "Odyssey", "ODY");
  }
}

module.exports = SkycloudExpanse;
