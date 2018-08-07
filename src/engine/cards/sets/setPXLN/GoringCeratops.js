"use strict";
const Constants = require ("../../../Constants");
const GoringCeratopsBase = require("../setXLN/GoringCeratops");

class GoringCeratops extends GoringCeratopsBase {
  constructor (game) {
    super(game, "Goring Ceratops", "Ixalan Promos", "PXLN");
  }
}

module.exports = GoringCeratops;
