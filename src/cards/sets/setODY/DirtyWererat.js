"use strict";
const Constants = require ("../../../Constants");
const DirtyWereratBase = require("../setPHUK/DirtyWererat");

class DirtyWererat extends DirtyWereratBase {
  constructor (game) {
    super(game, "Dirty Wererat", "Odyssey", "ODY");
  }
}

module.exports = DirtyWererat;
