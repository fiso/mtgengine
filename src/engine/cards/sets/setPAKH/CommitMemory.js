"use strict";
const Constants = require ("../../../Constants");
const CommitMemoryBase = require("../setAKH/CommitMemory");

class CommitMemory extends CommitMemoryBase {
  constructor (game) {
    super(game, "Commit // Memory", "Amonkhet Promos", "PAKH");
  }
}

module.exports = CommitMemory;
