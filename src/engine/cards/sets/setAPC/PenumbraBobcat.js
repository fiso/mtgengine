"use strict";
const Constants = require ("../../../Constants");
const PenumbraBobcatBase = require("../setTD0/PenumbraBobcat");

class PenumbraBobcat extends PenumbraBobcatBase {
  constructor (game) {
    super(game, "Penumbra Bobcat", "Apocalypse", "APC");
  }
}

module.exports = PenumbraBobcat;
