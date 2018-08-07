"use strict";
const Constants = require ("../../../Constants");
const SurrealMemoirBase = require("../setIMA/SurrealMemoir");

class SurrealMemoir extends SurrealMemoirBase {
  constructor (game) {
    super(game, "Surreal Memoir", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SurrealMemoir;
