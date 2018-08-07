"use strict";
const Constants = require ("../../../Constants");
const SorrowsPathBase = require("../setME3/SorrowsPath");

class SorrowsPath extends SorrowsPathBase {
  constructor (game) {
    super(game, "Sorrow's Path", "Magic Online Promos", "PRM");
  }
}

module.exports = SorrowsPath;
